using ManageMe.Enums;

namespace ManageMe.Database.Models;

public class Feature
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public Priority Priority { get; set; }
    public State State { get; set; }
    public int UniqueEntityId { get; set; }
    public ICollection<Task> Tasks { get; set; } = new List<Task>();
}