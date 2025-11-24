export default function TaskList({ tasks, onToggleTask }) {
  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <ol>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggleTask(task.id)}
            />
            {task.title}
          </label>
        </li>
      ))}
    </ol>
  );
}
