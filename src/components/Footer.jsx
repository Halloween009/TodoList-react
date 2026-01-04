import React from "react";
import TaskFilter from "./TaskFilter";
import PropTypes from "prop-types";

const Footer = ({
  itemCount,
  onFilterAll,
  onFilterActive,
  onFilterCompleted,
  currentFilter,
  clearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemCount} items left</span>
      <TaskFilter
        selAll={onFilterAll}
        selActive={onFilterActive}
        selCompleted={onFilterCompleted}
        currentFilter={currentFilter}
      />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onFilterAll: PropTypes.func.isRequired,
  onFilterActive: PropTypes.func.isRequired,
  onFilterCompleted: PropTypes.func.isRequired,
  currentFilter: PropTypes.oneOf("all", "active", "completed").isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  itemCount: 0,
};

export default Footer;
