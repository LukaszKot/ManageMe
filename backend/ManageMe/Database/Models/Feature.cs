using ManageMe.Enums;

namespace ManageMe.Database.Models;

public class Feature
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public Priority Priority { get; set; }
    public State State { get; set; }
}