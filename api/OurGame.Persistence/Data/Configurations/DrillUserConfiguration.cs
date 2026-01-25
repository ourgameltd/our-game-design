using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillUserConfiguration : IEntityTypeConfiguration<DrillUser>
{
    public void Configure(EntityTypeBuilder<DrillUser> builder)
    {
        builder.ToTable("DrillUsers");
        builder.HasKey(du => du.Id);

        // Unique constraint on DrillId + UserId
        builder.HasIndex(du => new { du.DrillId, du.UserId }).IsUnique();

        builder.HasOne(du => du.Drill)
            .WithMany(d => d.DrillUsers)
            .HasForeignKey(du => du.DrillId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(du => du.User)
            .WithMany(u => u.DrillUsers)
            .HasForeignKey(du => du.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
