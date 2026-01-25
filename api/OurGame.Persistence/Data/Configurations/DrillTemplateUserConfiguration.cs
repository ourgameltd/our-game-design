using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillTemplateUserConfiguration : IEntityTypeConfiguration<DrillTemplateUser>
{
    public void Configure(EntityTypeBuilder<DrillTemplateUser> builder)
    {
        builder.ToTable("DrillTemplateUsers");
        builder.HasKey(dtu => dtu.Id);

        // Unique constraint on DrillTemplateId + UserId
        builder.HasIndex(dtu => new { dtu.DrillTemplateId, dtu.UserId }).IsUnique();

        builder.HasOne(dtu => dtu.DrillTemplate)
            .WithMany(dt => dt.DrillTemplateUsers)
            .HasForeignKey(dtu => dtu.DrillTemplateId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dtu => dtu.User)
            .WithMany(u => u.DrillTemplateUsers)
            .HasForeignKey(dtu => dtu.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
