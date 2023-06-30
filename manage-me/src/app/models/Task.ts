import { Priority, State } from "./Feature";

export class Task {
    id?: number;
    name: string;
    description: string;
    priority: Priority;
    state: State;
    expectedTime: number;
    createdOn: Date;
    startedOn?: Date;
    endedOn?: Date;
    assignedUser?: string;
    featureId: number;

    constructor(name: string, description: string, priority: Priority, state: State, expectedTime: number, createdOn: Date, featureId: number,
        id?: number, startedOn?: Date, endedOn?: Date, assignedUser?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.state = state;
        this.expectedTime = expectedTime;
        this.createdOn = createdOn;
        this.featureId = featureId;
        this.startedOn = startedOn;
        this.endedOn = endedOn;
        this.assignedUser = assignedUser;
    }
}