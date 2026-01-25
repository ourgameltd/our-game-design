using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillTemplateClubConfiguration : IEntityTypeConfiguration<DrillTemplateClub>
{
    public void Configure(EntityTypeBuilder<DrillTemplateClub> builder)
    {
        builder.ToTable("DrillTemplateClubs");
        builder.HasKey(dtc => dtc.Id);

        // Unique constraint on DrillTemplateId + ClubId
        builder.HasIndex(dtc => new { dtc.DrillTemplateId, dtc.ClubId }).IsUnique();

        builder.HasOne(dtc => dtc.DrillTemplate)
            .WithMany(dt => dt.DrillTemplateClubs)
            .HasForeignKey(dtc => dtc.DrillTemplateId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dtc => dtc.Club)
            .WithMany(c => c.DrillTemplateClubs)
            .HasForeignKey(dtc => dtc.ClubId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
