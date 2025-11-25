export default function Card({ children }) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "0.5rem",
        marginBottom: "0.4rem",
      }}
    >
      {children}
    </div>
  );
}
