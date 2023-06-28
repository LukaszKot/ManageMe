using ManageMe.Enums;

namespace ManageMe.Dtos;

public record UpdateFeatureCommand(int Id,string Name, string Description, Priority Priority, State State);