using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class CoachConfiguration : IEntityTypeConfiguration<Coach>
{
    public void Configure(EntityTypeBuilder<Coach> builder)
    {
        builder.ToTable("coaches");
        builder.HasKey(c => c.Id);
        
        builder.Property(c => c.UserId)
            .HasColumnName("user_id");
            
        builder.HasOne(c => c.User)
            .WithMany()
            .HasForeignKey(c => c.UserId)
            .HasConstraintName("FK_coaches_users")
            .OnDelete(DeleteBehavior.Restrict);
            
        builder.HasIndex(c => c.UserId)
            .HasDatabaseName("IX_coaches_user_id");
    }
}
