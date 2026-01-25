using MediatR;
using Microsoft.EntityFrameworkCore;
using OurGame.Application.Abstractions;
using OurGame.Application.UseCases.Teams.Queries.GetTeamsByClubId.DTOs;
using OurGame.Persistence.Models;

namespace OurGame.Application.UseCases.Teams.Queries.GetTeamsByClubId;

/// <summary>
/// Query to get all teams for a specific club
/// </summary>
public record GetTeamsByClubIdQuery(Guid ClubId, bool IncludeArchived = false) : IQuery<List<ClubTeamDto>>;

/// <summary>
/// Handler for GetTeamsByClubIdQuery
/// </summary>
public class GetTeamsByClubIdHandler : IRequestHandler<GetTeamsByClubIdQuery, List<ClubTeamDto>>
{
    private readonly OurGameContext _db;

    public GetTeamsByClubIdHandler(OurGameContext db)
    {
        _db = db;
    }

    public async Task<List<ClubTeamDto>> Handle(GetTeamsByClubIdQuery query, CancellationToken cancellationToken)
    {
        var sql = query.IncludeArchived
            ? @"
                SELECT 
                    t.Id,
                    t.ClubId,
                    t.AgeGroupId,
                    ag.Name AS AgeGroupName,
                    t.Name,
                    t.ShortName,
                    t.Level,
                    t.Season,
                    t.PrimaryColor,
                    t.SecondaryColor,
                    t.IsArchived,
                    (SELECT COUNT(*) FROM PlayerTeams pt WHERE pt.TeamId = t.Id) AS PlayerCount
                FROM Teams t
                INNER JOIN AgeGroups ag ON t.AgeGroupId = ag.Id
                WHERE t.ClubId = {0}
                ORDER BY ag.Name, t.Name"
            : @"
                SELECT 
                    t.Id,
                    t.ClubId,
                    t.AgeGroupId,
                    ag.Name AS AgeGroupName,
                    t.Name,
                    t.ShortName,
                    t.Level,
                    t.Season,
                    t.PrimaryColor,
                    t.SecondaryColor,
                    t.IsArchived,
                    (SELECT COUNT(*) FROM PlayerTeams pt WHERE pt.TeamId = t.Id) AS PlayerCount
                FROM Teams t
                INNER JOIN AgeGroups ag ON t.AgeGroupId = ag.Id
                WHERE t.ClubId = {0} AND t.IsArchived = 0
                ORDER BY ag.Name, t.Name";

        var teamData = await _db.Database
            .SqlQueryRaw<TeamRawDto>(sql, query.ClubId)
            .ToListAsync(cancellationToken);

        return teamData
            .Select(t => new ClubTeamDto
            {
                Id = t.Id,
                ClubId = t.ClubId,
                AgeGroupId = t.AgeGroupId,
                AgeGroupName = t.AgeGroupName ?? string.Empty,
                Name = t.Name ?? string.Empty,
                ShortName = t.ShortName,
                Level = t.Level ?? string.Empty,
                Season = t.Season ?? string.Empty,
                Colors = new ClubTeamColorsDto
                {
                    Primary = t.PrimaryColor,
                    Secondary = t.SecondaryColor
                },
                IsArchived = t.IsArchived,
                PlayerCount = t.PlayerCount
            })
            .ToList();
    }
}

/// <summary>
/// DTO for raw SQL team query result
/// </summary>
class TeamRawDto
{
    public Guid Id { get; set; }
    public Guid ClubId { get; set; }
    public Guid AgeGroupId { get; set; }
    public string? AgeGroupName { get; set; }
    public string? Name { get; set; }
    public string? ShortName { get; set; }
    public string? Level { get; set; }
    public string? Season { get; set; }
    public string? PrimaryColor { get; set; }
    public string? SecondaryColor { get; set; }
    public bool IsArchived { get; set; }
    public int PlayerCount { get; set; }
}
