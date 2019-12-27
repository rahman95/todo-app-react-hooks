import React from "react";

function AddTodo({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Add Todo"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
