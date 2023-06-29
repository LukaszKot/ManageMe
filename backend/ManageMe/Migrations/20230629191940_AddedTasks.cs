using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ManageMe.Migrations
{
    /// <inheritdoc />
    public partial class AddedTasks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UniqueEntityId",
                table: "Features",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "UniqueEntities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UniqueEntities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Priority = table.Column<int>(type: "int", nullable: false),
                    State = table.Column<int>(type: "int", nullable: false),
                    ExpectedTime = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StartedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EndedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AssignedUser = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UniqueEntityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tasks_UniqueEntities_UniqueEntityId",
                        column: x => x.UniqueEntityId,
                        principalTable: "UniqueEntities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Features_UniqueEntityId",
                table: "Features",
                column: "UniqueEntityId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_UniqueEntityId",
                table: "Tasks",
                column: "UniqueEntityId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Features_UniqueEntities_UniqueEntityId",
                table: "Features",
                column: "UniqueEntityId",
                principalTable: "UniqueEntities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Features_UniqueEntities_UniqueEntityId",
                table: "Features");

            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "UniqueEntities");

            migrationBuilder.DropIndex(
                name: "IX_Features_UniqueEntityId",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "UniqueEntityId",
                table: "Features");
        }
    }
}
