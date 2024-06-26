import { Icon } from "@/types/icon";

const Edit = ({ size = 24, className = "fill-black" }: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M18.414 2a.996.996 0 00-.707.293L16 4l4 4 1.707-1.707a.999.999 0 000-1.414l-2.586-2.586A.996.996 0 0018.414 2zM14.5 5.5L3 17v4h4L18.5 9.5l-4-4z" />
    </svg>
  );
};

export default Edit;
