import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    console.log({ name, password, email });
  }

  return (
    <>
      <h2>SignUp Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
