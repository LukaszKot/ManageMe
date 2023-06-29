using ManageMe.Enums;

namespace ManageMe.Database.Models;

public class Task
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public Priority Priority { get; set; }
    public State State { get; set; }
    public int ExpectedTime { get; set; }
    public DateTime CreatedOn { get; set; }
    public DateTime? StartedOn { get; set; }
    public DateTime? EndedOn { get; set; }
    public string? AssignedUser { get; set; }
    public int UniqueEntityId { get; set; }
}