import React from "react";

function Todo({ todo, index, onChange, onDelete }) {
  const { text, completed } = todo;

  const handleCheckbox = e => {
    const checked = e.target.checked;
    onChange(index, checked);
  };

  const deleteTodo = e => {
    onDelete(index);
  };

  return (
    <div>
      <span>{text}</span>
      <span>
        <input type="checkbox" checked={completed} onChange={handleCheckbox} />
        <button onClick={deleteTodo}>&times;</button>
      </span>
    </div>
  );
}

export default Todo;
