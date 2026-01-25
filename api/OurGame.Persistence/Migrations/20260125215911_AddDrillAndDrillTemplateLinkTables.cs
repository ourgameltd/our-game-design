using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OurGame.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddDrillAndDrillTemplateLinkTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DrillAgeGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AgeGroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillAgeGroups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillAgeGroups_AgeGroups_AgeGroupId",
                        column: x => x.AgeGroupId,
                        principalTable: "AgeGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillAgeGroups_Drills_DrillId",
                        column: x => x.DrillId,
                        principalTable: "Drills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillClubs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ClubId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillClubs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillClubs_Clubs_ClubId",
                        column: x => x.ClubId,
                        principalTable: "Clubs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillClubs_Drills_DrillId",
                        column: x => x.DrillId,
                        principalTable: "Drills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillTeams",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TeamId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillTeams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillTeams_Drills_DrillId",
                        column: x => x.DrillId,
                        principalTable: "Drills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillTeams_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillTemplateAgeGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillTemplateId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AgeGroupId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillTemplateAgeGroups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillTemplateAgeGroups_AgeGroups_AgeGroupId",
                        column: x => x.AgeGroupId,
                        principalTable: "AgeGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillTemplateAgeGroups_DrillTemplates_DrillTemplateId",
                        column: x => x.DrillTemplateId,
                        principalTable: "DrillTemplates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillTemplateClubs",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillTemplateId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ClubId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillTemplateClubs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillTemplateClubs_Clubs_ClubId",
                        column: x => x.ClubId,
                        principalTable: "Clubs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillTemplateClubs_DrillTemplates_DrillTemplateId",
                        column: x => x.DrillTemplateId,
                        principalTable: "DrillTemplates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillTemplateTeams",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillTemplateId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TeamId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillTemplateTeams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillTemplateTeams_DrillTemplates_DrillTemplateId",
                        column: x => x.DrillTemplateId,
                        principalTable: "DrillTemplates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillTemplateTeams_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillTemplateUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillTemplateId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsOwner = table.Column<bool>(type: "bit", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillTemplateUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillTemplateUsers_DrillTemplates_DrillTemplateId",
                        column: x => x.DrillTemplateId,
                        principalTable: "DrillTemplates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillTemplateUsers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DrillUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DrillId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsOwner = table.Column<bool>(type: "bit", nullable: false),
                    SharedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrillUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DrillUsers_Drills_DrillId",
                        column: x => x.DrillId,
                        principalTable: "Drills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DrillUsers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DrillAgeGroups_AgeGroupId",
                table: "DrillAgeGroups",
                column: "AgeGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillAgeGroups_DrillId_AgeGroupId",
                table: "DrillAgeGroups",
                columns: new[] { "DrillId", "AgeGroupId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillClubs_ClubId",
                table: "DrillClubs",
                column: "ClubId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillClubs_DrillId_ClubId",
                table: "DrillClubs",
                columns: new[] { "DrillId", "ClubId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillTeams_DrillId_TeamId",
                table: "DrillTeams",
                columns: new[] { "DrillId", "TeamId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillTeams_TeamId",
                table: "DrillTeams",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateAgeGroups_AgeGroupId",
                table: "DrillTemplateAgeGroups",
                column: "AgeGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateAgeGroups_DrillTemplateId_AgeGroupId",
                table: "DrillTemplateAgeGroups",
                columns: new[] { "DrillTemplateId", "AgeGroupId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateClubs_ClubId",
                table: "DrillTemplateClubs",
                column: "ClubId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateClubs_DrillTemplateId_ClubId",
                table: "DrillTemplateClubs",
                columns: new[] { "DrillTemplateId", "ClubId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateTeams_DrillTemplateId_TeamId",
                table: "DrillTemplateTeams",
                columns: new[] { "DrillTemplateId", "TeamId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateTeams_TeamId",
                table: "DrillTemplateTeams",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateUsers_DrillTemplateId_UserId",
                table: "DrillTemplateUsers",
                columns: new[] { "DrillTemplateId", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillTemplateUsers_UserId",
                table: "DrillTemplateUsers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DrillUsers_DrillId_UserId",
                table: "DrillUsers",
                columns: new[] { "DrillId", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DrillUsers_UserId",
                table: "DrillUsers",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DrillAgeGroups");

            migrationBuilder.DropTable(
                name: "DrillClubs");

            migrationBuilder.DropTable(
                name: "DrillTeams");

            migrationBuilder.DropTable(
                name: "DrillTemplateAgeGroups");

            migrationBuilder.DropTable(
                name: "DrillTemplateClubs");

            migrationBuilder.DropTable(
                name: "DrillTemplateTeams");

            migrationBuilder.DropTable(
                name: "DrillTemplateUsers");

            migrationBuilder.DropTable(
                name: "DrillUsers");
        }
    }
}
