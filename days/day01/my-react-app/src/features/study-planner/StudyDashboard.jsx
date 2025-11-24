import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary";

export default function StudyDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Watch React lesson", done: false },
    { id: 2, title: "Practice components & state", done: true },
    { id: 3, title: "Work on mini-project", done: false },
  ]);

  function handleAddTask(title) {
    const trimmedTitle = title.trim();
    if (trimmedTitle === "") return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      done: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div>
      <h2>Study Dashboard</h2>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskSummary tasks={tasks} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}
