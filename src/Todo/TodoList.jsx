import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function TodoList() {
  const defaultTodos = [
    { text: "Learn about React", completed: false },
    { text: "Meet friend for lunch", completed: false },
    { text: "Build really cool todo app", completed: false }
  ];

  const [todos, setTodos] = useState(defaultTodos);

  const onChange = (index, checked) => {
    const updatedTodos = [...todos];
    updatedTodos[index]["completed"] = checked;

    setTodos(updatedTodos);
  };

  const onSubmit = e => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const value = input.value;

    if (!value || value.length === 0) {
      return;
    }

    const updatedTodos = [...todos];
    updatedTodos.push({ text: value, completed: false });

    setTodos(updatedTodos);

    // clear input
    input.value = "";
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo todo={todo} onChange={onChange} index={index} key={index} />
        ))}
      </ul>
      <AddTodo onSubmit={onSubmit} />
    </div>
  );
}

export default TodoList;
