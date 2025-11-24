export default function TaskSummary({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;
  const remaining = total - completed;

  if (total === 0) return <p>No tasks yet. Start studying! 💪</p>;

  return (
    <p>
      Total: {total} | Completed: {completed} | Remaining: {remaining}
    </p>
  );
}
