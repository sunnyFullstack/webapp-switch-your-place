import React from "react";

type InputProps = {
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  name = "password",
  label,
}) => {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
