using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OurGame.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class RefactorUserRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_users_clubs",
                table: "users");

            migrationBuilder.DropIndex(
                name: "IX_users_club_id",
                table: "users");

            migrationBuilder.DropIndex(
                name: "IX_users_player_id",
                table: "users");

            migrationBuilder.DropIndex(
                name: "IX_users_staff_id",
                table: "users");

            migrationBuilder.DropColumn(
                name: "club_id",
                table: "users");

            migrationBuilder.DropColumn(
                name: "player_id",
                table: "users");

            migrationBuilder.DropColumn(
                name: "staff_id",
                table: "users");

            migrationBuilder.AddColumn<Guid>(
                name: "user_id",
                table: "players",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "user_id",
                table: "coaches",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_players_user_id",
                table: "players",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_coaches_user_id",
                table: "coaches",
                column: "user_id");

            migrationBuilder.AddForeignKey(
                name: "FK_coaches_users",
                table: "coaches",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_players_users",
                table: "players",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_coaches_users",
                table: "coaches");

            migrationBuilder.DropForeignKey(
                name: "FK_players_users",
                table: "players");

            migrationBuilder.DropIndex(
                name: "IX_players_user_id",
                table: "players");

            migrationBuilder.DropIndex(
                name: "IX_coaches_user_id",
                table: "coaches");

            migrationBuilder.DropColumn(
                name: "user_id",
                table: "players");

            migrationBuilder.DropColumn(
                name: "user_id",
                table: "coaches");

            migrationBuilder.AddColumn<Guid>(
                name: "club_id",
                table: "users",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "player_id",
                table: "users",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "staff_id",
                table: "users",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_users_club_id",
                table: "users",
                column: "club_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_player_id",
                table: "users",
                column: "player_id");

            migrationBuilder.CreateIndex(
                name: "IX_users_staff_id",
                table: "users",
                column: "staff_id");

            migrationBuilder.AddForeignKey(
                name: "FK_users_clubs",
                table: "users",
                column: "club_id",
                principalTable: "clubs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
