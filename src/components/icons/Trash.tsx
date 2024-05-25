import { Icon } from "@/types/icon";

const Trash = ({ size = 24, className = "fill-black" }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M10 2L9 3H4v2h16V3h-5l-1-1h-4zM5 7v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7H5zm3 2h2v11H8V9zm6 0h2v11h-2V9z" />
    </svg>
  );
};

export default Trash;
