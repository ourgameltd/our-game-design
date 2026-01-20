using OurGame.Application.Abstractions;
using OurGame.Application.UseCases.Clubs.DTOs;

namespace OurGame.Application.UseCases.Teams.Queries;

/// <summary>
/// Query to get teams accessible for the current user (coach assignments)
/// </summary>
public record GetMyTeamsQuery(string AzureUserId) : IQuery<List<TeamListItemDto>>;
