using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OurGame.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RemoveScopeTypeFromFormation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ScopeType",
                table: "Formations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ScopeType",
                table: "Formations",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
