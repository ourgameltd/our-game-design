using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OurGame.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDeprecatedScopeColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Drills_Clubs_ClubId",
                table: "Drills");

            migrationBuilder.DropForeignKey(
                name: "FK_DrillTemplates_Clubs_ClubId",
                table: "DrillTemplates");

            migrationBuilder.DropForeignKey(
                name: "FK_Formations_Clubs_ScopeClubId",
                table: "Formations");

            migrationBuilder.DropIndex(
                name: "IX_Formations_ScopeClubId",
                table: "Formations");

            migrationBuilder.DropIndex(
                name: "IX_DrillTemplates_ClubId",
                table: "DrillTemplates");

            migrationBuilder.DropIndex(
                name: "IX_Drills_ClubId",
                table: "Drills");

            migrationBuilder.DropColumn(
                name: "ScopeAgeGroupId",
                table: "Formations");

            migrationBuilder.DropColumn(
                name: "ScopeClubId",
                table: "Formations");

            migrationBuilder.DropColumn(
                name: "ScopeTeamId",
                table: "Formations");

            migrationBuilder.DropColumn(
                name: "ClubId",
                table: "DrillTemplates");

            migrationBuilder.DropColumn(
                name: "ClubId",
                table: "Drills");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ScopeAgeGroupId",
                table: "Formations",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ScopeClubId",
                table: "Formations",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ScopeTeamId",
                table: "Formations",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ClubId",
                table: "DrillTemplates",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ClubId",
                table: "Drills",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Formations_ScopeClubId",
                table: "Formations",
                column: "ScopeClubId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplates_ClubId",
                table: "DrillTemplates",
                column: "ClubId");

            migrationBuilder.CreateIndex(
                name: "IX_Drills_ClubId",
                table: "Drills",
                column: "ClubId");

            migrationBuilder.AddForeignKey(
                name: "FK_Drills_Clubs_ClubId",
                table: "Drills",
                column: "ClubId",
                principalTable: "Clubs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DrillTemplates_Clubs_ClubId",
                table: "DrillTemplates",
                column: "ClubId",
                principalTable: "Clubs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Formations_Clubs_ScopeClubId",
                table: "Formations",
                column: "ScopeClubId",
                principalTable: "Clubs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
