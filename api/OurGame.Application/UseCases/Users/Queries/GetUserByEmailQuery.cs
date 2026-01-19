using OurGame.Application.Abstractions;
using OurGame.Application.UseCases.Users.DTOs;

namespace OurGame.Application.UseCases.Users.Queries;

/// <summary>
/// Query to get a user by email address
/// </summary>
public record GetUserByEmailQuery(string Email) : IQuery<UserProfileDto>;
