export class Project {
    name: string;
    description: string;
    code: string;
    constructor(name: string, description: string, code: string) {
        this.name = name;
        this.description = description;
        this.code = code;
    }

    getBacklogLink() {
        return `/${this.code}/backlog`
    }

    getBoardLink() {
        return `/${this.code}/kanban`
    }

    getFeatureLink(id: number) {
        return `/${this.code}/feature/${id}`
    }

    getTaskLink(id: number) {
        return `/${this.code}/tasks/${id}`
    }
}