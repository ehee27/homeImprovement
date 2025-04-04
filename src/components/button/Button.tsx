import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="bg-zinc-300 text-white py-2 px-5 rounded-md w-[50%] m-1"
        rel="noopener noreferrer"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
