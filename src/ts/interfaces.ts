export interface ITask {
  name: string;
  description: string;
  finished: boolean;
}

export interface ITaskUpdate {
  taskId: string;
  data: ITask;
}
