export default function PriceInput({ query, setQuery }) {
  return (
    <div>
      <input
        value={query}
        placeholder="Search car..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
