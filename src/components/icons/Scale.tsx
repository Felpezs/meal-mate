import { HTMLAttributes } from "react";

const Scale = ({
  size = 24,
  className = "fill-black",
}: {
  size?: number;
  className?: HTMLAttributes<HTMLElement>["className"];
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M17 8a5 5 0 005-5 1 1 0 00-1-1H3a1 1 0 00-1 1 5 5 0 005 5h1v2H5a1 1 0 00-1 .8l-2 10a1 1 0 00.21.83A1 1 0 003 22h18a1.001 1.001 0 00.77-.37 1 1 0 00.23-.83l-2-10a1 1 0 00-1-.8h-3V8h1zm-7 0h4v2h-4V8zm2 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
};

export default Scale;
