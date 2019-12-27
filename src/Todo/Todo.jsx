import React from "react";

function Todo({ todo, index, onChange }) {
  const { text, completed } = todo;

  const handleCheckbox = e => {
    const checked = e.target.checked;
    onChange(index, checked);
  };

  return (
    <div>
      <span>{text}</span>
      <span>
        <input type="checkbox" checked={completed} onChange={handleCheckbox} />
      </span>
    </div>
  );
}

export default Todo;
