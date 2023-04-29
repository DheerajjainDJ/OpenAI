import React from "react";

const FormField = ({
  labelName,
  type,
  value,
  name,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label
          htmlFor={name}
          className="block text-base font-medium text-gray-900 dark:text-white"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold tracking-wide text-sm text-black bg-green-500 hover:bg-green-400 active:bg-green-700 px-1 py-0  md:px-2 md:py-1 rounded-md"
          >
            Click to generate a random prompt
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="p-3 border border-gray-600 rounded-md bg-gray-50 text-base focus:ring-2 focus:ring-blue-500 focus:shadow-lg outline-none block w-full dark:text-black"
      />
    </div>
  );
};

export default FormField;
