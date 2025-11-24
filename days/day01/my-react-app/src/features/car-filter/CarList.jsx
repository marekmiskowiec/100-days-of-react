export default function CarList({ cars }) {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car}>{car}</li>
      ))}
    </ul>
  );
}
