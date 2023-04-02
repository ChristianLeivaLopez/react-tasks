import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../Data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function deletTask(taskid) {
    setTasks(tasks.filter((task) => task.id != taskid));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deletTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
