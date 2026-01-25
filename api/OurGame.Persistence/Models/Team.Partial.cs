using System.Collections.Generic;

namespace OurGame.Persistence.Models;

/// <summary>
/// Partial class to extend Team with link table navigation properties
/// </summary>
public partial class Team
{
    /// <summary>
    /// Formations shared with this team
    /// </summary>
    public virtual ICollection<FormationTeam> FormationTeams { get; set; } = new List<FormationTeam>();

    /// <summary>
    /// Drills shared with this team
    /// </summary>
    public virtual ICollection<DrillTeam> DrillTeams { get; set; } = new List<DrillTeam>();

    /// <summary>
    /// Drill templates shared with this team
    /// </summary>
    public virtual ICollection<DrillTemplateTeam> DrillTemplateTeams { get; set; } = new List<DrillTemplateTeam>();
}
