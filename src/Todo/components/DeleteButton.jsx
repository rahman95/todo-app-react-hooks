import React from "react";

// Checkbox styling - https://tailwindcomponents.com/component/buttons-with-icons
function DeleteButton({ onClick }) {
  return (
    <button
      className="bg-white border-2 text-gray-700 hover:border-red-500 hover:text-red-500 inline-flex items-center"
      title="Delete"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        />
      </svg>
    </button>
  );
}

export default DeleteButton;
