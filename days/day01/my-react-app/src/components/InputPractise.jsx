import { useState } from "react";

export default function InputPractise() {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleText} />
      <h2>Type something: {text}</h2>
      <h2>Character count {text.length}</h2>
    </>
  );
}
