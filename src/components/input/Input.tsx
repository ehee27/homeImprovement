import { InputProps } from "@/types";
import React from "react";

const Input = ({ type, name, value, placeholder }: InputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="bg-white shadow-inner shadow-zinc-200 text-zinc-500 p-2 rounded-md w-[100%] m-1"
      />
    </div>
  );
};

export default Input;
