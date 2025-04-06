import { ButtonProps } from "@/types";
import clsx from "clsx";
import React from "react";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
}: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        // className="bg-zinc-400 shadow shadow-zinc-500 text-white py-2 px-5 rounded-md w-[50%] m-1 hover:cursor-pointer"
        className={clsx(
          actionButton && "text-white outline-none",
          `${bgColor} text-white py-1 px-2 rounded m-2 hover:bg-zinc-100 hover:cursor-pointer shadow shadow-zinc-500 transition-all outline-none`
        )}
        rel="noopener noreferrer"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
