using OurGame.Application.Abstractions;
using OurGame.Application.UseCases.Users.DTOs;

namespace OurGame.Application.UseCases.Users.Queries;

/// <summary>
/// Query to get a user by Azure Static Web Apps user ID
/// </summary>
public record GetUserByAzureIdQuery(string AzureUserId) : IQuery<UserProfileDto>;
