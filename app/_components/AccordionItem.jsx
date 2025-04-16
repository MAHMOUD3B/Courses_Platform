"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border border-gray-300 rounded py-3 my-8 text-sm">
      <div
        className="flex-between cursor-pointer py-2 px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium ">{title}</span>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
