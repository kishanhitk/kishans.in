import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Routes } from "../config";
import KishanLogo from "../../public/assets/kishanlogo.png";
import { ThemeSwitcherButton } from "@components/ThemeSwitcherButton";

interface NavLinkProps {
  url: string;
  children: ReactNode;
}

interface HeaderProps {
  useAppDir?: boolean;
}

export const Header = ({ useAppDir = false }: HeaderProps) => {
  return (
    <header className="flex sticky backdrop-blur-md top-0 max-w-full w-[924px] mx-auto mb-8 p-4 justify-between align-middle z-10">
      <Link
        className="cursor-pointer span flex justify-center items-center 
           bg-gray-900 rounded-full h-[45px] w-[45px] hover:rotate-[360deg] 
           duration-700 ease-real-in-out transition-all shadow-2xl shadow-gray-500"
        href={(useAppDir ? "/new" : "/").concat(Routes.home)}
      >
        <Image
          priority={true}
          src={KishanLogo}
          placeholder="empty"
          alt="Kishan"
        ></Image>
      </Link>
      <div className="flex ">
        <div className="flex gap-3 items-center">
          <NavLink url={(useAppDir ? "/new" : "/").concat(Routes.projects)}>
            Projects
          </NavLink>
          <NavLink url={(useAppDir ? "/new" : "/").concat(Routes.aboutMe)}>
            About Me
          </NavLink>
          <ThemeSwitcherButton />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ url, children }: NavLinkProps) => (
  <Link
    className="font-normal transition-all ease-in-out duration-200 rounded-md px-4 py-2
    hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200"
    href={url}
    passHref
    scroll={false}
  >
    {children}
  </Link>
);
