using System.Collections.Generic;

namespace OurGame.Persistence.Models;

/// <summary>
/// Partial class to extend User with link table navigation properties
/// </summary>
public partial class User
{
    /// <summary>
    /// Formations owned by or shared with this user
    /// </summary>
    public virtual ICollection<FormationUser> FormationUsers { get; set; } = new List<FormationUser>();

    /// <summary>
    /// Drills owned by or shared with this user
    /// </summary>
    public virtual ICollection<DrillUser> DrillUsers { get; set; } = new List<DrillUser>();

    /// <summary>
    /// Drill templates owned by or shared with this user
    /// </summary>
    public virtual ICollection<DrillTemplateUser> DrillTemplateUsers { get; set; } = new List<DrillTemplateUser>();
}
