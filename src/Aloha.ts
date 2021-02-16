export class Aloha {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greet(): string {
        return `Aloha, Webpack con ${this.name}`
    }
}
