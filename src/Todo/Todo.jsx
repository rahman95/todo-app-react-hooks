import React from "react";

function Todo({ todo }) {
  const { text, completed } = todo;

  const onChange = e => {
    console.log(e);
  };

  return (
    <div>
      <span>{text}</span>
      <span>
        <input type="checkbox" checked={completed} onChange={onChange} />
      </span>
    </div>
  );
}

export default Todo;
