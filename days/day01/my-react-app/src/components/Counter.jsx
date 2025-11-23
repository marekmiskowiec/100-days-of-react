import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handlePlus() {
    setNumber((number) => number + 1);
  }

  function handleMinus() {
    setNumber((number) => number - 1);
  }

  function handleReset() {
    setNumber(0);
  }

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <p>{number}</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
