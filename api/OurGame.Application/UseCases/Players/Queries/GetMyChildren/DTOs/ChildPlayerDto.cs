namespace OurGame.Application.UseCases.Players.Queries.GetMyChildren.DTOs;

/// <summary>
/// DTO representing a child player for a parent user
/// </summary>
public class ChildPlayerDto
{
    public Guid Id { get; set; }
    public Guid ClubId { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? Nickname { get; set; }
    public DateOnly? DateOfBirth { get; set; }
    public string? Photo { get; set; }
    public string? AssociationId { get; set; }
    public string PreferredPositions { get; set; } = string.Empty;
    public int? OverallRating { get; set; }
    public bool IsArchived { get; set; }
    
    /// <summary>
    /// Nested club information
    /// </summary>
    public ChildPlayerClubDto? Club { get; set; }
    
    /// <summary>
    /// List of age groups the player belongs to
    /// </summary>
    public List<ChildPlayerAgeGroupDto> AgeGroups { get; set; } = new();
}

/// <summary>
/// DTO for club information within child player
/// </summary>
public class ChildPlayerClubDto
{
    public string Name { get; set; } = string.Empty;
    public string ShortName { get; set; } = string.Empty;
    public string? Logo { get; set; }
    public string? PrimaryColor { get; set; }
    public string? SecondaryColor { get; set; }
    public string? AccentColor { get; set; }
}

/// <summary>
/// DTO for age group information within child player
/// </summary>
public class ChildPlayerAgeGroupDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
}
