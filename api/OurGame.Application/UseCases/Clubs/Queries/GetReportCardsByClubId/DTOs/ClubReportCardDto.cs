namespace OurGame.Application.UseCases.Clubs.Queries.GetReportCardsByClubId.DTOs;

/// <summary>
/// DTO for report card in club report cards list
/// </summary>
public class ClubReportCardDto
{
    public Guid Id { get; set; }
    public Guid PlayerId { get; set; }
    public ClubReportCardPlayerDto Player { get; set; } = new();
    public ClubReportCardPeriodDto Period { get; set; } = new();
    public decimal OverallRating { get; set; }
    public List<string> Strengths { get; set; } = new();
    public List<string> AreasForImprovement { get; set; } = new();
    public List<ClubReportCardDevelopmentActionDto> DevelopmentActions { get; set; } = new();
    public string CoachComments { get; set; } = string.Empty;
    public Guid? CreatedBy { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<ClubReportCardSimilarProfessionalDto> SimilarProfessionalPlayers { get; set; } = new();
}

/// <summary>
/// DTO for player in report card
/// </summary>
public class ClubReportCardPlayerDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? Nickname { get; set; }
    public string? Photo { get; set; }
    public List<string> PreferredPositions { get; set; } = new();
    public List<Guid> AgeGroupIds { get; set; } = new();
}

/// <summary>
/// DTO for period in report card
/// </summary>
public class ClubReportCardPeriodDto
{
    public DateOnly? Start { get; set; }
    public DateOnly? End { get; set; }
}

/// <summary>
/// DTO for development action in report card
/// </summary>
public class ClubReportCardDevelopmentActionDto
{
    public Guid Id { get; set; }
    public string Goal { get; set; } = string.Empty;
    public List<string> Actions { get; set; } = new();
    public DateOnly? StartDate { get; set; }
    public DateOnly? TargetDate { get; set; }
    public bool Completed { get; set; }
    public DateOnly? CompletedDate { get; set; }
}

/// <summary>
/// DTO for similar professional player in report card
/// </summary>
public class ClubReportCardSimilarProfessionalDto
{
    public string Name { get; set; } = string.Empty;
    public string Team { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public string Reason { get; set; } = string.Empty;
}
