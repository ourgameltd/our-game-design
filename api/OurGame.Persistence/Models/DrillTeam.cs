#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for Drill to Team (many-to-many relationship)
/// Allows drills to be shared with teams
/// </summary>
public partial class DrillTeam
{
    public Guid Id { get; set; }

    public Guid DrillId { get; set; }

    public Guid TeamId { get; set; }

    /// <summary>
    /// When the drill was shared with this team
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual Drill Drill { get; set; }

    public virtual Team Team { get; set; }
}
