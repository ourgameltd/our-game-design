using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Data.SeedData;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class FormationConfiguration : IEntityTypeConfiguration<Formation>
{
    public void Configure(EntityTypeBuilder<Formation> builder)
    {
        builder.ToTable("formations");
        builder.HasKey(f => f.Id);

        // Seed data
        builder.HasData(FormationSeedData.GetFormations());
    }
}
