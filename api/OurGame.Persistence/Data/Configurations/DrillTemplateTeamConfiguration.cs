using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillTemplateTeamConfiguration : IEntityTypeConfiguration<DrillTemplateTeam>
{
    public void Configure(EntityTypeBuilder<DrillTemplateTeam> builder)
    {
        builder.ToTable("DrillTemplateTeams");
        builder.HasKey(dtt => dtt.Id);

        // Unique constraint on DrillTemplateId + TeamId
        builder.HasIndex(dtt => new { dtt.DrillTemplateId, dtt.TeamId }).IsUnique();

        builder.HasOne(dtt => dtt.DrillTemplate)
            .WithMany(dt => dt.DrillTemplateTeams)
            .HasForeignKey(dtt => dtt.DrillTemplateId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dtt => dtt.Team)
            .WithMany(t => t.DrillTemplateTeams)
            .HasForeignKey(dtt => dtt.TeamId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
