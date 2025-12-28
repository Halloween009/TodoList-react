import React from "react";
import { useState } from "react";

const NewTaskForm = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const handleCreate = (e) => {
    if (e.key === "Enter") {
      onCreate(value);
      setValue("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleCreate}
      />
    </header>
  );
};

export default NewTaskForm;
