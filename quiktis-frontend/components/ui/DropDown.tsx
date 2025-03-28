import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import the arrow icon

interface DropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  placeholder?: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  label,
  className,
  placeholder = "Select an option", // Default placeholder
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      {label && (
        <label className="absolute px-1 text-primary font-semibold bg-black top-[-0.6em] z-40 left-2">
          {label}
        </label>
      )}
      <div
        className={`relative border border-gray-300 text-gray-400 px-4 py-3 rounded-md cursor-pointer flex items-center justify-between ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || placeholder} {/* Use placeholder if no option is selected */}
        <FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full mt-1 bg-gray-800 rounded shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-[#ffffff0e] text-white"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
