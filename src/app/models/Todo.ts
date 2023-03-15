export enum MissionStatus {
  Todo,
  InProcess,
  Done,
}

export class Todo {
  constructor(id: string, mission: string) {
    this.id = id;
    this.mission = mission;
  }

  id!: string;
  mission!: string;
  missionStatus = MissionStatus.Todo;
}
