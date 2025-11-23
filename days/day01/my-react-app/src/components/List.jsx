export default function Skills({ title, items }) {
  if (items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
