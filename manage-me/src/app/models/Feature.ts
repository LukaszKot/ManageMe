export interface Feature {
    id: number,
    name: string,
    description: string,
    priority: Priority,
    state: State
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