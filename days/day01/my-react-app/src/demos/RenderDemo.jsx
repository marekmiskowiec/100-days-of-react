import { useState } from "react";

export default function RenderDemo() {
  const [count, setCount] = useState(0);

  console.log("RenderDemo rendered!");

  return (
    <div>
      <h2>Render Demo</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>

      <Child />
    </div>
  );
}

function Child() {
  console.log("Child component rendered!");
  return <p>I am a child component.</p>;
}
