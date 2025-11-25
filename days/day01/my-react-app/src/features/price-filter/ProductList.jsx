export default function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </div>
  );
}
