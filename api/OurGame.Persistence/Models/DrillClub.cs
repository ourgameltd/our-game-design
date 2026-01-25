#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for Drill to Club (many-to-many relationship)
/// Allows drills to be shared with clubs
/// </summary>
public partial class DrillClub
{
    public Guid Id { get; set; }

    public Guid DrillId { get; set; }

    public Guid ClubId { get; set; }

    /// <summary>
    /// When the drill was shared with this club
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual Drill Drill { get; set; }

    public virtual Club Club { get; set; }
}
