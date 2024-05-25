import { HTMLAttributes, MouseEventHandler, ReactElement } from "react";

type Variant = "primary" | "secondary" | "danger";

type IconButton = {
  variant: Variant;
  children: ReactElement;
  onClick: MouseEventHandler;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

const variantClass: {
  [key in Variant]: HTMLAttributes<HTMLElement>["className"];
} = {
  primary: "bg-accent-500 hover:bg-accent-600",
  secondary: "bg-violet-100 hover:bg-violet-200",
  danger: "bg-danger-100 hover:bg-danger-200",
};

const IconButton = ({ variant, children, onClick, className }: IconButton) => {
  return (
    <button
      onClick={onClick}
      className={
        `rounded-md p-1 transition-colors ${variantClass[variant]} ` + className
      }
    >
      {children}
    </button>
  );
};

export default IconButton;
