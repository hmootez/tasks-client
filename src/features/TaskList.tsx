import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskForm from "./TaskForm";
import useTask from "../hooks/useTask";

const TaskList: React.FC = () => {
  const { data: tasks } = useTasks();

  const { markAsFinished, deleteTask } = useTask();

  const [addTask, setAddTask] = useState<boolean>(false);

  return (
    <div>
      {Object.keys(tasks).map((id: string) => (
        <div key={id}>
          {" "}
          {tasks[id]?.name} -- {tasks[id]?.description} --{" "}
          {tasks[id]?.finished ? "Finished" : "Not Finished"}{" "}
          {!tasks[id]?.finished && (
            <button
              onClick={() => markAsFinished({ data: tasks[id], taskId: id })}
            >
              {" "}
              Mark as finished Task
            </button>
          )}
          <button onClick={() => deleteTask(id)}> Delete Task</button>{" "}
        </div>
      ))}

      <button onClick={() => setAddTask(true)}>Add new Task</button>
      {addTask && <TaskForm></TaskForm>}
    </div>
  );
};

export default TaskList;
