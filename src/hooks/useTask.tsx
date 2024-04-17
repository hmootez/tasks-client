import { useMutation, useQueryClient } from "react-query";
import TaskServices from "../services/taskApi";
import { ITaskUpdate, ITask } from "../ts/interfaces";

export default function useTask() {
  const queryClient = useQueryClient();

  const { mutate: createTask } = useMutation(
    async (data: ITask) => await TaskServices.createTask(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  const { mutate: markAsFinished } = useMutation(
    async ({ taskId, data }: ITaskUpdate) => {
      await TaskServices.updateTask(taskId, { ...data, finished: true });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  const { mutate: deleteTask } = useMutation(
    async (taskId: string) => await TaskServices.deleteTask(taskId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );

  return {
    createTask,
    deleteTask,
    markAsFinished,
  };
}
