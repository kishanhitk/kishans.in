import React from "react";
import Image from "next/image";

const ProfilePicture = () => (
  <div className="h-[181px] w-[181px] self-center rounded-full bg-purple-500 p-[1px]">
    <Image
      className="rounded-full"
      height={180}
      width={180}
      priority={true}
      src="/assets/kishan-kumar-developer-profile-photo.jpg"
      alt="Kishan Kumar Photo"
    ></Image>
  </div>
);
export default ProfilePicture;
