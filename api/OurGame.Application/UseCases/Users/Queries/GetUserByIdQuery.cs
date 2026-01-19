using OurGame.Application.Abstractions;
using OurGame.Application.UseCases.Users.DTOs;

namespace OurGame.Application.UseCases.Users.Queries;

/// <summary>
/// Query to get a user by ID with profile information
/// </summary>
public record GetUserByIdQuery(Guid UserId) : IQuery<UserProfileDto>;
