using ManageMe.Enums;

namespace ManageMe.Dtos;

public record UpdateTaskCommand(int Id, string Name, string Description, Priority Priority, State State, int ExpectedTime, 
    DateTime CreatedOn, DateTime? StartedOn, DateTime? EndedOn, string? AssignedUser, int FeatureId);