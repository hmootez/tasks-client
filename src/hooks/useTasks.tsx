import { useQuery } from "react-query";
import TaskServices from "../services/taskApi";

export default function useTasks() {
  const { data } = useQuery(
    "tasks",
    async () => await TaskServices.getAllTasks()
  );

  return {
    data: data || [],
  };
}
