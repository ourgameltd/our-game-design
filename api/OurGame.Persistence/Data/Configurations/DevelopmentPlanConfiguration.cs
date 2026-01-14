using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Data.SeedData;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class DevelopmentPlanConfiguration : IEntityTypeConfiguration<DevelopmentPlan>
{
    public void Configure(EntityTypeBuilder<DevelopmentPlan> builder)
    {
        builder.ToTable("development_plans");
        builder.HasKey(d => d.Id);

        // Seed data
        builder.HasData(DevelopmentPlanSeedData.GetDevelopmentPlans());
    }
}
