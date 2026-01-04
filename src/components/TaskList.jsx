import React from "react";
import { Task } from "./Task";
import PropTypes from "prop-types";

const TaskList = ({
  tasks,
  onToggle,
  onEdit,
  onDelete,
  onSave,
  onCancelEdit,
}) => {
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
          onCancelEdit={() => onCancelEdit(task.id)}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      created: PropTypes.instanceOf(Date),
      description: PropTypes.string,
      editing: PropTypes.bool,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  task: [],
};

export default TaskList;
