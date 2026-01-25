using System.Collections.Generic;

namespace OurGame.Persistence.Models;

/// <summary>
/// Partial class to extend Club with link table navigation properties
/// </summary>
public partial class Club
{
    /// <summary>
    /// Formations shared with this club
    /// </summary>
    public virtual ICollection<FormationClub> FormationClubs { get; set; } = new List<FormationClub>();

    /// <summary>
    /// Drills shared with this club
    /// </summary>
    public virtual ICollection<DrillClub> DrillClubs { get; set; } = new List<DrillClub>();

    /// <summary>
    /// Drill templates shared with this club
    /// </summary>
    public virtual ICollection<DrillTemplateClub> DrillTemplateClubs { get; set; } = new List<DrillTemplateClub>();
}
