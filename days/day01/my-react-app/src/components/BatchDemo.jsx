import { useState } from "react";

export default function BatchDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Batch demo</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Normal +3
      </button>

      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Functional +3
      </button>

      <button
        onClick={() => {
          console.log("Before:", count);
          setCount(count + 1);
          console.log("After:", count);
        }}
      >
        Log test
      </button>
    </>
  );
}
