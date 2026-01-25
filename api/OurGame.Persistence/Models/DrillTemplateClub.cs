#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for DrillTemplate to Club (many-to-many relationship)
/// Allows drill templates to be shared with clubs
/// </summary>
public partial class DrillTemplateClub
{
    public Guid Id { get; set; }

    public Guid DrillTemplateId { get; set; }

    public Guid ClubId { get; set; }

    /// <summary>
    /// When the drill template was shared with this club
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual DrillTemplate DrillTemplate { get; set; }

    public virtual Club Club { get; set; }
}
