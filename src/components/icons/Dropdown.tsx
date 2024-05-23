import { Icon } from "@/types/icon";

const Dropdown = ({ size = 24, className = "fill-black" }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 14.373a.82.82 0 01-.298-.053.789.789 0 01-.268-.184L7.046 9.748a.503.503 0 01-.15-.344.466.466 0 01.15-.364.49.49 0 01.354-.16.49.49 0 01.354.16L12 13.287l4.246-4.247a.502.502 0 01.344-.15.466.466 0 01.364.15.49.49 0 01.16.354.49.49 0 01-.16.354l-4.389 4.389a.788.788 0 01-.267.183.82.82 0 01-.298.053z" />
    </svg>
  );
};

export default Dropdown;
