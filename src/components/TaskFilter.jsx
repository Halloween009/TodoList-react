import React from "react";

const TaskFilter = ({ currentFilter, selAll, selActive, selCompleted }) => {
  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === "all" ? "selected" : ""}
          onClick={selAll}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === "active" ? "selected" : ""}
          onClick={selActive}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === "completed" ? "selected" : ""}
          onClick={selCompleted}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TaskFilter;
