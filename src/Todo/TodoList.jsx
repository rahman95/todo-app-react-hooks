import React, { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const defaultTodos = [
    { text: "Learn about React", completed: false },
    { text: "Meet friend for lunch", completed: false },
    { text: "Build really cool todo app", completed: false }
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
