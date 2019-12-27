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

  const onDelete = index => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);

    setTodos(updatedTodos);
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector("input");
    const value = input.value;

    if (!value || value.length === 0) {
      return;
    }

    const updatedTodos = [...todos];
    updatedTodos.push({ text: value, completed: false });

    setTodos(updatedTodos);

    form.reset();
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
            index={index}
            key={index}
          />
        ))}
      </ul>
      <AddTodo onSubmit={onSubmit} />
    </div>
  );
}

export default TodoList;
