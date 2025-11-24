export default function SearchBar({ query, onQueryChange }) {
  return (
    <input
      placeholder="Search cars..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}
