using ManageMe.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace ManageMe.Database;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        
    }

    public DbSet<Feature> Features { get; set; } = default!;
}