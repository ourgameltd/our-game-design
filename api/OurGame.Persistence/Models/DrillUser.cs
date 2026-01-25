#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for Drill to User (many-to-many relationship)
/// Allows drills to be owned by or shared with users privately
/// </summary>
public partial class DrillUser
{
    public Guid Id { get; set; }

    public Guid DrillId { get; set; }

    public Guid UserId { get; set; }

    /// <summary>
    /// Whether this user is the owner/creator of the drill
    /// </summary>
    public bool IsOwner { get; set; }

    /// <summary>
    /// When the drill was shared with or created by this user
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual Drill Drill { get; set; }

    public virtual User User { get; set; }
}
