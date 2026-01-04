import PropTypes from "prop-types";
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

TaskFilter.propTypes = {
  currentFilter: PropTypes.oneOf("all", "active", "completed").isRequired,
  selAll: PropTypes.func.isRequired,
  selActive: PropTypes.func.isRequired,
  selCompleted: PropTypes.func.isRequired,
};

export default TaskFilter;
