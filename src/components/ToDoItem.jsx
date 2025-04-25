import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      
      <li style={{ textDecoration: props.isCompleted ? "line-through" : "none" }}>
        {props.text}
      </li>

      
      <div className="icon-group">

        <span
          className="check-icon"
          onClick={() => props.onToggle(props.id)}
          style={{ cursor: "pointer" }}
        >
          ✅
        </span>

        <span
          className="delete-icon"
          onClick={() => props.onChecked(props.id)}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          🗑️
        </span>
      </div>
    </div>
  );
}

export default ToDoItem;