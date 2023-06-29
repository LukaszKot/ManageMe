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
        return `/${this.code}/board`
    }

    getFeatureLink(id: number) {
        return `/${this.code}/feature/${id}`
    }
}