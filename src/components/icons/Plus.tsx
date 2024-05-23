import { Icon } from "@/types/icon";

const Plus = ({ size = 24, className = "fill-black" }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      className={className}
    >
      <path d="M12.667 7.833h-4v-4a.667.667 0 10-1.334 0v4h-4a.667.667 0 100 1.334h4v4a.667.667 0 101.334 0v-4h4a.667.667 0 000-1.334z" />
    </svg>
  );
};

export default Plus;
