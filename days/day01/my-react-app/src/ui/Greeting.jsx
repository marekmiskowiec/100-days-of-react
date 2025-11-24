import { useState } from "react";

export default function Greeting({ name }) {
  const [isVisible, setIsVisible] = useState(true);

  function showMessage() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <div>
      <h1>Hello, I'm {name}</h1>
      <button onClick={showMessage}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <Message />}
    </div>
  );
}

function Message() {
  return <p>This is my first React component!</p>;
}
