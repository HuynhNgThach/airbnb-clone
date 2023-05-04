"use client";
import Image from "next/image";
import React from "react";
interface AvatarProps {
  imgUrl: string | undefined | null;
}

const Avatar: React.FC<AvatarProps> = ({ imgUrl }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={imgUrl || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
