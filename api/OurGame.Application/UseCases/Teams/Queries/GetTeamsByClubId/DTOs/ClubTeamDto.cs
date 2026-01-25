namespace OurGame.Application.UseCases.Teams.Queries.GetTeamsByClubId.DTOs;

/// <summary>
/// DTO for team in club teams list
/// </summary>
public class ClubTeamDto
{
    public Guid Id { get; set; }
    public Guid ClubId { get; set; }
    public Guid AgeGroupId { get; set; }
    public string AgeGroupName { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? ShortName { get; set; }
    public string Level { get; set; } = string.Empty;
    public string Season { get; set; } = string.Empty;
    public ClubTeamColorsDto? Colors { get; set; }
    public bool IsArchived { get; set; }
    public int PlayerCount { get; set; }
}

/// <summary>
/// DTO for team colors
/// </summary>
public class ClubTeamColorsDto
{
    public string? Primary { get; set; }
    public string? Secondary { get; set; }
}
