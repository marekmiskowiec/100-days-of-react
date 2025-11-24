import { useState, useCallback } from "react";
import React from "react";

export default function ReRenderOptimizer() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered!");

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>Re-render Optimizer Demo</h2>
      <button onClick={increment}>Increment</button>
      <Child number={count} />
    </div>
  );
}

const Child = React.memo(function Child({ number }) {
  console.log("Child rendered!");
  return <p>Child number: {number}</p>;
});
