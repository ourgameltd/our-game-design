using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillAgeGroupConfiguration : IEntityTypeConfiguration<DrillAgeGroup>
{
    public void Configure(EntityTypeBuilder<DrillAgeGroup> builder)
    {
        builder.ToTable("DrillAgeGroups");
        builder.HasKey(dag => dag.Id);

        // Unique constraint on DrillId + AgeGroupId
        builder.HasIndex(dag => new { dag.DrillId, dag.AgeGroupId }).IsUnique();

        builder.HasOne(dag => dag.Drill)
            .WithMany(d => d.DrillAgeGroups)
            .HasForeignKey(dag => dag.DrillId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dag => dag.AgeGroup)
            .WithMany(ag => ag.DrillAgeGroups)
            .HasForeignKey(dag => dag.AgeGroupId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
