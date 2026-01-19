using MediatR;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using OurGame.Api.Extensions;
using OurGame.Application.Abstractions.Exceptions;
using OurGame.Application.Abstractions.Responses;
using OurGame.Application.UseCases.Users.DTOs;
using OurGame.Application.UseCases.Users.Queries;
using System.Net;

namespace OurGame.Api.Functions;

/// <summary>
/// Azure Functions for User endpoints
/// </summary>
public class UserFunctions
{
    private readonly IMediator _mediator;
    private readonly ILogger<UserFunctions> _logger;

    public UserFunctions(IMediator mediator, ILogger<UserFunctions> logger)
    {
        _mediator = mediator;
        _logger = logger;
    }

    /// <summary>
    /// Get user profile by ID
    /// </summary>
    /// <param name="req">The HTTP request</param>
    /// <param name="userId">The user ID (GUID)</param>
    /// <returns>Detailed profile information about a specific user</returns>
    [Function("GetUserById")]
    [OpenApiOperation(operationId: "GetUserById", tags: new[] { "Users" }, Summary = "Get user by ID", Description = "Retrieves detailed profile information about a specific user")]
    [OpenApiParameter(name: "userId", In = ParameterLocation.Path, Required = true, Type = typeof(string), Description = "The user ID (GUID)")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User retrieved successfully")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.BadRequest, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "Invalid user ID format")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.NotFound, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User not found")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "Internal server error")]
    public async Task<HttpResponseData> GetUserById(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "v1/users/{userId}")] HttpRequestData req,
        string userId)
    {
        try
        {
            if (!Guid.TryParse(userId, out var userGuid))
            {
                var badResponse = req.CreateResponse(HttpStatusCode.BadRequest);
                await badResponse.WriteAsJsonAsync(ApiResponse<UserProfileDto>.ValidationErrorResponse("Invalid user ID format"));
                return badResponse;
            }

            var user = await _mediator.Send(new GetUserByIdQuery(userGuid));
            
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.SuccessResponse(user));
            return response;
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "User not found: {UserId}", userId);
            var response = req.CreateResponse(HttpStatusCode.NotFound);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.NotFoundResponse(ex.Message));
            return response;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving user: {UserId}", userId);
            var response = req.CreateResponse(HttpStatusCode.InternalServerError);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.ErrorResponse(
                "An error occurred while retrieving the user", 500));
            return response;
        }
    }

    /// <summary>
    /// Get user profile by email
    /// </summary>
    /// <param name="req">The HTTP request</param>
    /// <returns>Detailed profile information about a specific user</returns>
    [Function("GetUserByEmail")]
    [OpenApiOperation(operationId: "GetUserByEmail", tags: new[] { "Users" }, Summary = "Get user by email", Description = "Retrieves detailed profile information about a specific user by their email address")]
    [OpenApiParameter(name: "email", In = ParameterLocation.Query, Required = true, Type = typeof(string), Description = "The user's email address")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User retrieved successfully")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.BadRequest, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "Invalid email format")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.NotFound, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User not found")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "Internal server error")]
    public async Task<HttpResponseData> GetUserByEmail(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "v1/users/by-email")] HttpRequestData req)
    {
        try
        {
            var email = req.GetQueryParam("email");
            
            if (string.IsNullOrWhiteSpace(email))
            {
                var badResponse = req.CreateResponse(HttpStatusCode.BadRequest);
                await badResponse.WriteAsJsonAsync(ApiResponse<UserProfileDto>.ValidationErrorResponse("Email parameter is required"));
                return badResponse;
            }

            var user = await _mediator.Send(new GetUserByEmailQuery(email));
            
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.SuccessResponse(user));
            return response;
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "User not found by email");
            var response = req.CreateResponse(HttpStatusCode.NotFound);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.NotFoundResponse(ex.Message));
            return response;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving user by email");
            var response = req.CreateResponse(HttpStatusCode.InternalServerError);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.ErrorResponse(
                "An error occurred while retrieving the user", 500));
            return response;
        }
    }

    /// <summary>
    /// Get current authenticated user profile
    /// </summary>
    /// <param name="req">The HTTP request</param>
    /// <returns>Profile information about the authenticated user</returns>
    [Function("GetMe")]
    [OpenApiOperation(operationId: "GetMe", tags: new[] { "Users" }, Summary = "Get current user", Description = "Retrieves profile information about the currently authenticated user")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User retrieved successfully")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.Unauthorized, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User not authenticated")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.NotFound, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "User profile not found in database")]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.InternalServerError, contentType: "application/json", bodyType: typeof(ApiResponse<UserProfileDto>), Description = "Internal server error")]
    public async Task<HttpResponseData> GetMe(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "v1/users/me")] HttpRequestData req)
    {
        try
        {
            // Get user ID from Azure Static Web Apps authentication
            var azureUserId = req.GetUserId();
            
            if (string.IsNullOrEmpty(azureUserId))
            {
                _logger.LogWarning("Unauthorized request to /me endpoint");
                var unauthorizedResponse = req.CreateResponse(HttpStatusCode.Unauthorized);
                await unauthorizedResponse.WriteAsJsonAsync(ApiResponse<UserProfileDto>.ErrorResponse(
                    "User not authenticated", 401));
                return unauthorizedResponse;
            }

            var user = await _mediator.Send(new GetUserByAzureIdQuery(azureUserId));
            
            var response = req.CreateResponse(HttpStatusCode.OK);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.SuccessResponse(user));
            return response;
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "User profile not found in database");
            var response = req.CreateResponse(HttpStatusCode.NotFound);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.NotFoundResponse(
                "User profile not found. Please contact an administrator."));
            return response;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving current user profile");
            var response = req.CreateResponse(HttpStatusCode.InternalServerError);
            await response.WriteAsJsonAsync(ApiResponse<UserProfileDto>.ErrorResponse(
                "An error occurred while retrieving your profile", 500));
            return response;
        }
    }
}
