import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-7 h-7 rounded-full overflow-hidden">
      <Image
        alt="avatar image"
        src={"/avatar.jpg"}
        width={36}
        height={36}
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
