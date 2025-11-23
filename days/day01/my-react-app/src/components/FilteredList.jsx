import { useState } from "react";

export default function FilteredList() {
  const initialSkills = ["HTML", "CSS", "JavaScript", "React", "Node"];
  const [query, setQuery] = useState("");

  const filteredList = initialSkills.filter((skill) =>
    skill.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <ul>
        {filteredList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <p>Total: {filteredList.length}</p>
    </div>
  );
}
