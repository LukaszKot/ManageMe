using ManageMe.Database.Models;
using Microsoft.EntityFrameworkCore;
using Task = ManageMe.Database.Models.Task;

namespace ManageMe.Database;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }

    public DbSet<Feature> Features { get; set; } = default!;
    public DbSet<UniqueEntity> UniqueEntities { get; set; } = default!;
    public DbSet<Task> Tasks { get; set; } = default!;


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Task>()
            .HasOne<UniqueEntity>().WithOne(x => x.Task)
            .HasForeignKey<Task>()
            .IsRequired();
        
        modelBuilder.Entity<Feature>()
            .HasOne<UniqueEntity>().WithOne(x => x.Feature)
            .HasForeignKey<Feature>()
            .IsRequired();
        base.OnModelCreating(modelBuilder);
    }
}