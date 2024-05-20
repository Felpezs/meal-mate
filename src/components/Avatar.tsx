import Image from "next/image";

const Avatar = () => {
  return (
    <div className="h-7 w-7 overflow-hidden rounded-full">
      <Image
        alt="avatar image"
        src={"/avatar.jpg"}
        width={36}
        height={36}
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
