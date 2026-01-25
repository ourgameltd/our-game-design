using System.Collections.Generic;

namespace OurGame.Persistence.Models;

/// <summary>
/// Partial class to extend AgeGroup with link table navigation properties
/// </summary>
public partial class AgeGroup
{
    /// <summary>
    /// Formations shared with this age group
    /// </summary>
    public virtual ICollection<FormationAgeGroup> FormationAgeGroups { get; set; } = new List<FormationAgeGroup>();

    /// <summary>
    /// Drills shared with this age group
    /// </summary>
    public virtual ICollection<DrillAgeGroup> DrillAgeGroups { get; set; } = new List<DrillAgeGroup>();

    /// <summary>
    /// Drill templates shared with this age group
    /// </summary>
    public virtual ICollection<DrillTemplateAgeGroup> DrillTemplateAgeGroups { get; set; } = new List<DrillTemplateAgeGroup>();
}
