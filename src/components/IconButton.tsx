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
  primary: "bg-accent-500",
  secondary: "bg-violet-100",
  danger: "bg-danger-100",
};

const IconButton = ({ variant, children, onClick }: IconButton) => {
  return (
    <button
      onClick={onClick}
      className={`flex size-5 items-center justify-center rounded-md ${variantClass[variant]}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
