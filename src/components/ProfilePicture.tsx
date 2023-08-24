import React from "react";
import Image from "next/image";
import profilePic from "../../public/assets/kishan-kumar-developer-profile-photo.jpg";

const ProfilePicture = () => (
  <div className="h-[181px] w-[181px] self-center rounded-full bg-purple-500 p-[1px]">
    <Image
      className="rounded-full"
      priority={true}
      src={profilePic}
      alt="Kishan Kumar Photo"
      placeholder="blur"
    ></Image>
  </div>
);
export default ProfilePicture;
