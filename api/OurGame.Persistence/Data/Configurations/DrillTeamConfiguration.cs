using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillTeamConfiguration : IEntityTypeConfiguration<DrillTeam>
{
    public void Configure(EntityTypeBuilder<DrillTeam> builder)
    {
        builder.ToTable("DrillTeams");
        builder.HasKey(dt => dt.Id);

        // Unique constraint on DrillId + TeamId
        builder.HasIndex(dt => new { dt.DrillId, dt.TeamId }).IsUnique();

        builder.HasOne(dt => dt.Drill)
            .WithMany(d => d.DrillTeams)
            .HasForeignKey(dt => dt.DrillId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dt => dt.Team)
            .WithMany(t => t.DrillTeams)
            .HasForeignKey(dt => dt.TeamId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
