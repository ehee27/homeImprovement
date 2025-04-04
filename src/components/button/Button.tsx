import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="bg-zinc-400 shadow shadow-zinc-500 text-white py-2 px-5 rounded-md w-[50%] m-1 hover:cursor-pointer"
        rel="noopener noreferrer"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
