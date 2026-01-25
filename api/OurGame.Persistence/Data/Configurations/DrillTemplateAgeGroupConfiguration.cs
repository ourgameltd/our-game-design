using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillTemplateAgeGroupConfiguration : IEntityTypeConfiguration<DrillTemplateAgeGroup>
{
    public void Configure(EntityTypeBuilder<DrillTemplateAgeGroup> builder)
    {
        builder.ToTable("DrillTemplateAgeGroups");
        builder.HasKey(dtag => dtag.Id);

        // Unique constraint on DrillTemplateId + AgeGroupId
        builder.HasIndex(dtag => new { dtag.DrillTemplateId, dtag.AgeGroupId }).IsUnique();

        builder.HasOne(dtag => dtag.DrillTemplate)
            .WithMany(dt => dt.DrillTemplateAgeGroups)
            .HasForeignKey(dtag => dtag.DrillTemplateId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dtag => dtag.AgeGroup)
            .WithMany(ag => ag.DrillTemplateAgeGroups)
            .HasForeignKey(dtag => dtag.AgeGroupId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
