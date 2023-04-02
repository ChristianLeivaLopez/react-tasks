import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setdescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-blue-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-5xl font-bold mb-3 text-white">Añadir Tareas</h1>
        <input
          className="p-3 w-full rounded-md"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="p-3 w-full rounded-md"
          placeholder="Escribe una descripción"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-blue-700 rounded-md px-2 py-1 mt-3 hover:bg-blue-300 text-white">
          Guardar tarea
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
