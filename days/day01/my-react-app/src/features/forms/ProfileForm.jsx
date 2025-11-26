import { useState } from "react";

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    role: "user",
    bio: "",
    active: false,
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;

    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Profile</h2>

      <label>
        Name: <input name="name" value={form.name} onChange={handleChange} />
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
      </label>

      <label>
        Role:
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>
      </label>

      <label>
        bio:{" "}
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
        ></textarea>
      </label>

      <label>
        <input
          type="checkbox"
          name="active"
          checked={form.active}
          onChange={handleChange}
        />
        Active user
      </label>

      <button>Submit</button>

      <hr />

      <h3>Live preview:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}
