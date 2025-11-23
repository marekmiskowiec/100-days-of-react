export default function Card({ title, description }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "0.5rem",
        marginBottom: "0.4rem",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
