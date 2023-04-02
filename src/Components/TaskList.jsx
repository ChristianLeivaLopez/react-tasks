import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import TaskCard from "./TaskCard";
function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <div className="text-center text-5xl text-white font-bold">
        <h1>No hay tareas</h1>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
