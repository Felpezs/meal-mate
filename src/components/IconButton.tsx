import { HTMLAttributes, MouseEventHandler, ReactElement } from "react";

type Variant = "primary" | "secondary" | "danger";

type IconButton = {
  variant: Variant;
  children: ReactElement;
  onClick: MouseEventHandler;
};

const variantClass: {
  [key in Variant]: HTMLAttributes<HTMLElement>["className"];
} = {
  primary: "bg-accent-500 hover:bg-accent-600",
  secondary: "bg-violet-100 hover:bg-violet-200",
  danger: "bg-danger-100 hover:bg-danger-200",
};

const IconButton = ({ variant, children, onClick }: IconButton) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md p-1 transition-colors ${variantClass[variant]}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
