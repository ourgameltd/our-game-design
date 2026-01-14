using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Data.SeedData;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class MatchConfiguration : IEntityTypeConfiguration<Match>
{
    public void Configure(EntityTypeBuilder<Match> builder)
    {
        builder.ToTable("matches");
        builder.HasKey(m => m.Id);

        // Seed data
        builder.HasData(MatchSeedData.GetMatches());
    }
}
