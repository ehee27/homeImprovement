import { ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  onSubmit?: () => void;
}

export interface InputProps {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

export interface UserProps {
  id: string;
}

export interface ProjectProps {
  id: string;
}
