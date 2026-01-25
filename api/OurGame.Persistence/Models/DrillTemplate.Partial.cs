using System.Collections.Generic;

namespace OurGame.Persistence.Models;

/// <summary>
/// Partial class to extend DrillTemplate with link table navigation properties
/// </summary>
public partial class DrillTemplate
{
    /// <summary>
    /// Clubs this drill template is shared with
    /// </summary>
    public virtual ICollection<DrillTemplateClub> DrillTemplateClubs { get; set; } = new List<DrillTemplateClub>();

    /// <summary>
    /// Age groups this drill template is shared with
    /// </summary>
    public virtual ICollection<DrillTemplateAgeGroup> DrillTemplateAgeGroups { get; set; } = new List<DrillTemplateAgeGroup>();

    /// <summary>
    /// Teams this drill template is shared with
    /// </summary>
    public virtual ICollection<DrillTemplateTeam> DrillTemplateTeams { get; set; } = new List<DrillTemplateTeam>();

    /// <summary>
    /// Users this drill template is owned by or shared with
    /// </summary>
    public virtual ICollection<DrillTemplateUser> DrillTemplateUsers { get; set; } = new List<DrillTemplateUser>();
}
