import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Routes } from "../config";
import KishanLogo from "../../public/assets/kishanlogo.png";

interface NavLinkProps {
  url: string;
  children: ReactNode;
}

export const Header = () => {
  return (
    <header className="flex sticky max-w-full w-[924px] mx-auto mb-8 p-4 justify-between align-middle z-10">
      <Link href={Routes.home}>
        <div
          className="cursor-pointer span flex justify-center items-center 
        bg-gray-900 rounded-full h-[45px] w-[45px] hover:rotate-[360deg] 
        duration-700 ease-real-in-out transition-all"
        >
          <Image
            priority={true}
            src={KishanLogo}
            placeholder="empty"
            alt="Kishan"
          ></Image>
        </div>
      </Link>
      <div className="flex ">
        <div className="flex">
          <NavLink url={Routes.projects}>Projects</NavLink>
          <NavLink url={Routes.aboutMe}>About Me</NavLink>
        </div>
        <button>O</button>
      </div>
    </header>
  );
};

const NavLink = ({ url, children }: NavLinkProps) => (
  <Link href={url} passHref scroll={false}>
    <button
      className="font-normal transition-all ease-in-out duration-200 rounded-md px-4
    hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200"
    >
      {children}
    </button>
  </Link>
);
