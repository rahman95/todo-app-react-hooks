import React from "react";
import CheckBox from "./components/CheckBox";
import DeleteButton from "./components/DeleteButton";

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
    <div className="flex justify-between p-1">
      <CheckBox
        labelText={text}
        checked={completed}
        handleCheckbox={handleCheckbox}
      />
      <DeleteButton onClick={deleteTodo} />
    </div>
  );
}

export default Todo;
