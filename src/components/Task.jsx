import React, { useEffect, useRef } from "react";
import { formatDistanceToNow } from "date-fns";

export const Task = ({
  completed,
  created,
  description,
  editing,
  onToggle,
  onEdit,
  onDelete,
  onSave,
  onCancelEdit,
}) => {
  const timeFormat = formatDistanceToNow(created, { addSuffix: true });
  const editInputRef = useRef(null);

  useEffect(() => {
    if (editing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editing]);

  const handleSave = (e) => {
    if (e.key === "Enter") {
      onSave(e.target.value);
    }
    if (e.key === "Escape") {
      onCancelEdit();
    }
  };

  return (
    <li
      className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          style={{ left: 0 }}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {timeFormat}</span>
        </label>
        <button className="icon icon-edit" onClick={onEdit} />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
      <input
        type="text"
        className="edit"
        ref={editInputRef}
        defaultValue={description}
        onKeyDown={handleSave}
        onBlur={onCancelEdit}
      />
    </li>
  );
};
