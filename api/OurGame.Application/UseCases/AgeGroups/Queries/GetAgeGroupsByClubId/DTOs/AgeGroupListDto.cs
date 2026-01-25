namespace OurGame.Application.UseCases.AgeGroups.Queries.GetAgeGroupsByClubId.DTOs;

/// <summary>
/// DTO for age group list item with statistics
/// </summary>
public class AgeGroupListDto
{
    public Guid Id { get; set; }
    public Guid ClubId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public string Season { get; set; } = string.Empty;
    public List<string> Seasons { get; set; } = new();
    public string DefaultSeason { get; set; } = string.Empty;
    public int DefaultSquadSize { get; set; }
    public string? Description { get; set; }
    public bool IsArchived { get; set; }
    public int TeamCount { get; set; }
    public int PlayerCount { get; set; }
    public int MatchesPlayed { get; set; }
    public int Wins { get; set; }
    public int Draws { get; set; }
    public int Losses { get; set; }
    public decimal WinRate { get; set; }
    public int GoalDifference { get; set; }
}
