import React from "react";
import { Task } from "./Task";

const TaskList = ({ tasks, onToggle, onEdit, onDelete, onSave }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          completed={task.completed}
          created={task.created}
          description={task.description}
          editing={task.editing}
          onToggle={() => onToggle(task.id)}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onDelete(task.id)}
          onSave={(newDescription) => onSave(task.id, newDescription)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
