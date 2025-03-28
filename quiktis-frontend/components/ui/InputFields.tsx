import React from "react";

interface InputFieldProps {
  name?: string; // Added name prop
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name, // Added name prop
  label,
  type,
  value,
  placeholder,
  required = false,
  onChange,
}) => {
  return (
    <div className="relative flex flex-col gap-1">
      <label className="absolute bg-black -top-2 text-primary left-2 px-1 font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name} // Added name attribute
        type={type}
        value={value}
        placeholder={placeholder}
        className="p-3 border bg-inherit border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
