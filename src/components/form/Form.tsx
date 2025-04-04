"use client";

import { FormProps } from "@/types";
import { useRef } from "react";

const Form = ({ children, action }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form action={action} ref={ref}>
        {children}
      </form>
    </div>
  );
};

export default Form;
