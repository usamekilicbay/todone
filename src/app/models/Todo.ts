export enum TaskStatus {
  Todo,
  InProcess,
  Done,
}

export class Todo {
  constructor(contex: string) {
    this.context = contex;
  }
  context!: string;
  status = TaskStatus.Todo;
}
