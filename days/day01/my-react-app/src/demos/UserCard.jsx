import { useState } from "react";

export default function UserCard() {
  const [user, setUser] = useState({
    name: "Marek",
    age: 25,
    country: "Poland",
  });

  function increaseAge() {
    setUser((user) => ({ ...user, age: user.age + 1 }));
  }

  function changeName() {
    setUser((user) => ({ ...user, name: "Tom" }));
  }

  return (
    <>
      <h2>User Card:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>

      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}
