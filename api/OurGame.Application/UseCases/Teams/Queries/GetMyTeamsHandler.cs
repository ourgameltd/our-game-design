using MediatR;
using Microsoft.EntityFrameworkCore;
using OurGame.Application.UseCases.Clubs.DTOs;
using OurGame.Persistence.Models;

namespace OurGame.Application.UseCases.Teams.Queries;

/// <summary>
/// Handler for GetMyTeamsQuery
/// </summary>
public class GetMyTeamsHandler : IRequestHandler<GetMyTeamsQuery, List<TeamListItemDto>>
{
    private readonly OurGameContext _db;

    public GetMyTeamsHandler(OurGameContext db)
    {
        _db = db;
    }

    public async Task<List<TeamListItemDto>> Handle(GetMyTeamsQuery query, CancellationToken cancellationToken)
    {
        // Raw SQL query to get teams for the current user via coach assignments
        var sql = @"
            SELECT DISTINCT
                t.Id,
                t.ClubId,
                t.AgeGroupId,
                t.Name,
                t.PrimaryColor,
                t.SecondaryColor,
                t.Season,
                t.IsArchived,
                ag.Name AS AgeGroupName,
                ag.DefaultSquadSize,
                cl.Name AS ClubName,
                cl.ShortName AS ClubShortName,
                cl.Logo AS ClubLogo,
                cl.PrimaryColor AS ClubPrimaryColor,
                cl.SecondaryColor AS ClubSecondaryColor,
                cl.AccentColor AS ClubAccentColor,
                cl.FoundedYear AS ClubFoundedYear,
                (SELECT COUNT(*) 
                 FROM player_teams pt 
                 INNER JOIN players p ON pt.PlayerId = p.Id 
                 WHERE pt.TeamId = t.Id AND p.IsArchived = 0) AS PlayerCount
            FROM users u
            INNER JOIN coaches c ON c.user_id = u.Id
            INNER JOIN team_coaches tc ON tc.CoachId = c.Id
            INNER JOIN teams t ON tc.TeamId = t.Id
            LEFT JOIN age_groups ag ON t.AgeGroupId = ag.Id
            LEFT JOIN clubs cl ON t.ClubId = cl.Id
            WHERE u.AzureUserId = {0}
              AND t.IsArchived = 0
            ORDER BY ag.Name DESC, t.Name";

        var teamData = await _db.Database
            .SqlQueryRaw<TeamRawDto>(sql, query.AzureUserId)
            .ToListAsync(cancellationToken);

        if (teamData.Count == 0)
        {
            return new List<TeamListItemDto>();
        }

        // Get team IDs
        var teamIds = teamData.Select(t => t.Id).ToList();

        // Get coaches for all teams
        var coaches = await _db.TeamCoaches
            .AsNoTracking()
            .Where(tc => teamIds.Contains(tc.TeamId))
            .Select(tc => new
            {
                TeamId = tc.TeamId,
                Coach = new TeamCoachDto
                {
                    Id = tc.Coach.Id,
                    FirstName = tc.Coach.FirstName,
                    LastName = tc.Coach.LastName,
                    Role = "coach"
                }
            })
            .ToListAsync(cancellationToken);

        var coachesByTeam = coaches
            .GroupBy(c => c.TeamId)
            .ToDictionary(g => g.Key, g => g.Select(x => x.Coach).ToList());

        return teamData
            .Select(t => new TeamListItemDto
            {
                Id = t.Id,
                ClubId = t.ClubId,
                AgeGroupId = t.AgeGroupId,
                AgeGroupName = t.AgeGroupName ?? string.Empty,
                Name = t.Name ?? string.Empty,
                Colors = new TeamColorsDto
                {
                    Primary = t.PrimaryColor ?? "#000000",
                    Secondary = t.SecondaryColor ?? "#FFFFFF"
                },
                Season = t.Season ?? string.Empty,
                SquadSize = t.DefaultSquadSize,
                Coaches = coachesByTeam.GetValueOrDefault(t.Id, new List<TeamCoachDto>()),
                PlayerCount = t.PlayerCount,
                IsArchived = t.IsArchived,
                Club = new TeamClubDto
                {
                    Name = t.ClubName ?? string.Empty,
                    ShortName = t.ClubShortName ?? string.Empty,
                    Logo = t.ClubLogo,
                    PrimaryColor = t.ClubPrimaryColor,
                    SecondaryColor = t.ClubSecondaryColor,
                    AccentColor = t.ClubAccentColor,
                    FoundedYear = t.ClubFoundedYear
                }
            })
            .ToList();
    }
}

/// <summary>
/// DTO for raw SQL query result
/// </summary>
internal class TeamRawDto
{
    public Guid Id { get; set; }
    public Guid ClubId { get; set; }
    public Guid AgeGroupId { get; set; }
    public string? Name { get; set; }
    public string? PrimaryColor { get; set; }
    public string? SecondaryColor { get; set; }
    public string? Season { get; set; }
    public bool IsArchived { get; set; }
    public string? AgeGroupName { get; set; }
    public int DefaultSquadSize { get; set; }
    public int PlayerCount { get; set; }
    public string? ClubName { get; set; }
    public string? ClubShortName { get; set; }
    public string? ClubLogo { get; set; }
    public string? ClubPrimaryColor { get; set; }
    public string? ClubSecondaryColor { get; set; }
    public string? ClubAccentColor { get; set; }
    public int? ClubFoundedYear { get; set; }
}
