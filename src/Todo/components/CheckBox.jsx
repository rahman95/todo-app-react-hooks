import React from "react";

const css = `
input:checked + svg {
    display: block;
}
`;

// Checkbox styling - https://tailwindcomponents.com/component/checkbox-1
function CheckBox({ labelText, checked, handleCheckbox }) {
  return (
    <div>
      <label className="flex justify-start items-start">
        <div className="bg-white border-2 border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 hover:border-blue-500 focus-within:border-blue-500">
          <input
            type="checkbox"
            className="opacity-0 absolute"
            checked={checked}
            onChange={handleCheckbox}
          />
          <svg
            className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </div>
        <div className={checked ? "line-through select-none" : "select-none"}>
          {labelText}
        </div>
      </label>
      <style>{css}</style>
    </div>
  );
}

export default CheckBox;
