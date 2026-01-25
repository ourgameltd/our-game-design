#nullable disable
using System;

namespace OurGame.Persistence.Models;

/// <summary>
/// Link table for DrillTemplate to User (many-to-many relationship)
/// Allows drill templates to be owned by or shared with users privately
/// </summary>
public partial class DrillTemplateUser
{
    public Guid Id { get; set; }

    public Guid DrillTemplateId { get; set; }

    public Guid UserId { get; set; }

    /// <summary>
    /// Whether this user is the owner/creator of the drill template
    /// </summary>
    public bool IsOwner { get; set; }

    /// <summary>
    /// When the drill template was shared with or created by this user
    /// </summary>
    public DateTime SharedAt { get; set; }

    public virtual DrillTemplate DrillTemplate { get; set; }

    public virtual User User { get; set; }
}
