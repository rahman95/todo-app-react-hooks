import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
}

export default Todo;
