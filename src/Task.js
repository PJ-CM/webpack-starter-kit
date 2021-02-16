export class Task {
  constructor(name) {
    this.id = new Date().getTime(); // ID basado en los milisegundos del momento
    this.name = name;
    this.isComplete = false;

    return this;
  }
}
