import React from "react";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";

function App() {
  return (
    <div className="w-full h-full flex bg-gray-400 p-10">
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
