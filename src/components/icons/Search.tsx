import { HTMLAttributes } from "react";

const Search = ({
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
      viewBox="0 0 16 17"
      className={className}
    >
      <path d="M14.473 14.027L12 11.573a6 6 0 10-.927.927l2.454 2.453a.665.665 0 00.946 0 .667.667 0 000-.926zM7.333 12.5a4.667 4.667 0 110-9.335 4.667 4.667 0 010 9.335z" />
    </svg>
  );
};

export default Search;
