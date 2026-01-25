#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for Drill to AgeGroup (many-to-many relationship)
/// Allows drills to be shared with age groups
/// </summary>
public partial class DrillAgeGroup
{
    public Guid Id { get; set; }

    public Guid DrillId { get; set; }

    public Guid AgeGroupId { get; set; }

    /// <summary>
    /// When the drill was shared with this age group
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual Drill Drill { get; set; }

    public virtual AgeGroup AgeGroup { get; set; }
}
