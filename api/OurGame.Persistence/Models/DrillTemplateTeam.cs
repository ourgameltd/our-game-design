#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for DrillTemplate to Team (many-to-many relationship)
/// Allows drill templates to be shared with teams
/// </summary>
public partial class DrillTemplateTeam
{
    public Guid Id { get; set; }

    public Guid DrillTemplateId { get; set; }

    public Guid TeamId { get; set; }

    /// <summary>
    /// When the drill template was shared with this team
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual DrillTemplate DrillTemplate { get; set; }

    public virtual Team Team { get; set; }
}
