import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const defaultTodos = [
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ];
  const [todos] = useState(defaultTodos);

  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo todo={todo} index={index} key={index} />
      ))}
    </ul>
  );
}

export default TodoList;
