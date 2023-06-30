import { Task } from "./Task";

export class Feature {
    id?: number;
    name: string;
    description: string;
    priority: Priority;
    state: State;
    tasks: Task[]

    constructor(name: string, description: string, priority: Priority, state: State, tasks: Task[] = [], id?: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.state = state;
        this.tasks = tasks
    }
}


export enum Priority {
    High = 0,
    Medium = 1,
    Low = 2
}

export enum State {
    Todo = 0,
    Doing = 1,
    Done = 2
}