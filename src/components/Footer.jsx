import React from "react";
import TaskFilter from "./TaskFilter";

const Footer = ({ itemCount }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemCount} items left</span>
      <TaskFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
