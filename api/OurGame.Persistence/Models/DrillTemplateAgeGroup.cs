#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for DrillTemplate to AgeGroup (many-to-many relationship)
/// Allows drill templates to be shared with age groups
/// </summary>
public partial class DrillTemplateAgeGroup
{
    public Guid Id { get; set; }

    public Guid DrillTemplateId { get; set; }

    public Guid AgeGroupId { get; set; }

    /// <summary>
    /// When the drill template was shared with this age group
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual DrillTemplate DrillTemplate { get; set; }

    public virtual AgeGroup AgeGroup { get; set; }
}
