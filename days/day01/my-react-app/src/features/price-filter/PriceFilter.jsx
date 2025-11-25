import { useState } from "react";
import PriceInput from "./PriceInput";
import ProductList from "./ProductList";

export default function PriceFilter() {
  const [maxPrice, setMaxPrice] = useState("");
  const cars = [
    { id: 1, name: "BMW", price: 50000 },
    { id: 2, name: "Mercedes", price: 54444 },
    { id: 3, name: "Audi", price: 76555 },
    { id: 4, name: "Honda", price: 89234 },
    { id: 5, name: "Subaru", price: 123422 },
    { id: 6, name: "Lamborghini", price: 255555 },
  ];

  const max = maxPrice === "" ? Infinity : Number(maxPrice);

  const filteredCars = cars.filter((car) => car.price <= max);
  return (
    <div>
      <h2>Price Filter</h2>
      <PriceInput query={maxPrice} setQuery={setMaxPrice} />
      <ProductList products={filteredCars} />
    </div>
  );
}
