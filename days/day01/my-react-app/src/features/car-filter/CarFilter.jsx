import { useState } from "react";
import SearchBar from "./SearchBar";
import CarList from "./CarList";

export default function CarFilter() {
  const cars = ["BMW", "Audi", "Mercedes", "Honda"];
  const [query, setQuery] = useState("");

  // Derived data:
  const filteredCars = cars.filter((car) =>
    car.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Car Filter</h2>
      <SearchBar query={query} onQueryChange={setQuery} />
      <CarList cars={filteredCars} />
    </div>
  );
}
