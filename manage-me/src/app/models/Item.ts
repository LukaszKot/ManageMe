import { Priority, State } from "./Feature";

export interface Item {
    id?: number;
    name: string;
    description: string;
    priority: Priority;
    state: State;
}