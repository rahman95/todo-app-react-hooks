import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

function TodoList() {
  const defaultTodos = [
    { text: "Learn about React ⚛️", completed: false },
    { text: "Look into Hooks ⚓️", completed: false },
    { text: "Meet friends for lunch 🍕", completed: false },
    { text: "Build really cool todo app 🚀", completed: false }
  ];

  const [todos, setTodos] = useState(defaultTodos);

  const countTodos = () => {
    return todos.length;
  };

  const allComplete = () => {
    return todos.every(todo => todo.completed);
  };

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
    <div className="border-8 border-gray-700 p-8">
      <h2 className="border-b-2 border-gray-700 text-3xl text-gray-700 mb-4">
        My Todos ({countTodos()})
      </h2>
      {allComplete() && (
        <h3 className="bg-green-400 italic px-3 py-2 mb-4 text-center text-white">
          <span role="img" aria-label="Party Emoji">
            🎉
          </span>
          <span>Well done, all items are complete!</span>
        </h3>
      )}
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
