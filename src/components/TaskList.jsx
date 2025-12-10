import React from "react";
import { Task } from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          completed={task.completed}
          created={task.created}
          description={task.description}
        />
      ))}
    </ul>
  );
};

export default TaskList;
