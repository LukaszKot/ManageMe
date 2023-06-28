using ManageMe.Enums;

namespace ManageMe.Dtos;

public record AddFeatureCommand(string Name, string Description, Priority Priority, State State);