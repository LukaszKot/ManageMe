namespace ManageMe.Database.Models;

public class UniqueEntity
{
    public int Id { get; set; }
    public Task? Task { get; set; }
    public Feature? Feature { get; set; }
}