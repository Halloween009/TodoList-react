import React from "react";
import { formatDistanceToNow } from "date-fns";

export const Task = ({ completed, created, description }) => {
  const timeFormat = formatDistanceToNow(created, { addSuffix: true });
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {timeFormat}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
    </li>
  );
};
