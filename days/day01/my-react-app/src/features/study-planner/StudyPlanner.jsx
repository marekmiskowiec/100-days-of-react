import { useState } from "react";

export default function StudyPlanner() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Watch React lesson", done: false },
    { id: 2, title: "Practice components & props", done: true },
    { id: 3, title: "Build mini project", done: false },
  ]);
  const [text, setText] = useState("");

  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const remaining = total - completed;

  function handleAddTask() {
    if (text.trim() === "") return; // prevent adding empty tasks
    const newTask = {
      id: Date.now(),
      title: text,
      done: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
    setText("");
  }

  function toggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div>
      <h2>React Study Planner</h2>
      <p>Total tasks: {total}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {remaining}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new study task…"
      />
      <button onClick={handleAddTask}>Add task</button>
      <p>{text}</p>
      <ol>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.title}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleTask(task.id)}
            >
              {task.done ? "✅" : "❌"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
