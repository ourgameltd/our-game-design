using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OurGame.Persistence.Models;

namespace OurGame.Persistence.Data.Configurations;

public class PlayerConfiguration : IEntityTypeConfiguration<Player>
{
    public void Configure(EntityTypeBuilder<Player> builder)
    {
        builder.ToTable("players");
        builder.HasKey(p => p.Id);
        
        builder.Property(p => p.UserId)
            .HasColumnName("user_id");
            
        builder.HasOne(p => p.User)
            .WithMany()
            .HasForeignKey(p => p.UserId)
            .HasConstraintName("FK_players_users")
            .OnDelete(DeleteBehavior.Restrict);
            
        builder.HasIndex(p => p.UserId)
            .HasDatabaseName("IX_players_user_id");
    }
}
