import { useState } from "react";

export default function AddSkill() {
  const [skills, addSkills] = useState(["HTML", "CSS"]);
  const [text, setText] = useState("");

  function handleAddSkill() {
    if (text.trim() === "") return; // prevent adding empty strings
    addSkills((skills) => [...skills, text]);
    setText(""); // clear input
  }

  function removeSkill(skillToRemove) {
    addSkills((skills) => skills.filter((skill) => skill !== skillToRemove));
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddSkill}>Add skill</button>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            {skill}
            <button onClick={() => removeSkill(skill)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
