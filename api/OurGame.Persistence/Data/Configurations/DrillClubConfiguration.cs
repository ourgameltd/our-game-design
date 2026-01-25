using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DrillClubConfiguration : IEntityTypeConfiguration<DrillClub>
{
    public void Configure(EntityTypeBuilder<DrillClub> builder)
    {
        builder.ToTable("DrillClubs");
        builder.HasKey(dc => dc.Id);

        // Unique constraint on DrillId + ClubId
        builder.HasIndex(dc => new { dc.DrillId, dc.ClubId }).IsUnique();

        builder.HasOne(dc => dc.Drill)
            .WithMany(d => d.DrillClubs)
            .HasForeignKey(dc => dc.DrillId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(dc => dc.Club)
            .WithMany(c => c.DrillClubs)
            .HasForeignKey(dc => dc.ClubId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
