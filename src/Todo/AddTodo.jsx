import React from "react";

function AddTodo({ onSubmit }) {
  return (
    <div className="p-10">
      <form onSubmit={onSubmit}>
        <input
          className="appearance-none border px-3 py-2 text-grey-darker"
          type="text"
          placeholder="Add Todo"
        />
        <button
          className="bg-gray-700 hover:bg-gray-800 border border-gray-700 px-3 py-2 text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
