import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  const { deletTask } = useContext(TaskContext);
  return (
    <div className="bg-blue-400 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm">{task.description}</p>
      <button
        className="bg-blue-700 rounded-md px-2 py-1 mt-3 hover:bg-blue-300"
        onClick={() => deletTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
