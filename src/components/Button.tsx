import { MouseEventHandler, ReactElement } from "react";

type Variant = "primary" | "secondary" | "danger";

type Button = {
  variant: Variant;
  icon?: ReactElement;
  children: string;
  onClick: MouseEventHandler;
};

const variantClass: { [key in Variant]: string } = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",
};

const Button = ({ icon, variant, children, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 rounded-full px-5 py-2  ${variantClass[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
