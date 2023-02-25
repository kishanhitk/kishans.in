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
    <header className="sticky top-0 z-10 mx-auto mb-8 flex w-[924px] max-w-full justify-between p-4 align-middle backdrop-blur-md">
      <Link
        className="span flex h-[45px] w-[45px] cursor-pointer 
           items-center justify-center rounded-full bg-gray-900 shadow-2xl 
           shadow-gray-500 transition-all duration-700 ease-real-in-out hover:rotate-[360deg]"
        href={Routes.home}
      >
        <Image
          priority={true}
          src={KishanLogo}
          placeholder="empty"
          alt="Kishan"
        ></Image>
      </Link>
      <div className="flex ">
        <div className="flex items-center gap-3">
          <NavLink url={Routes.projects}>Projects</NavLink>
          <NavLink url={Routes.aboutMe}>About Me</NavLink>
          <ThemeSwitcherButton />
        </div>
      </div>
      <Link href="demo">Demo</Link>
    </header>
  );
};

const NavLink = ({ url, children }: NavLinkProps) => (
  <Link
    className="rounded-md px-4 py-2 font-normal transition-all duration-200 ease-in-out
    hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200"
    href={url}
  >
    {children}
  </Link>
);
