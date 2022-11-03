import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { useTheme } from "next-themes";
import { Routes } from "../config";
import KishanLogo from "../../public/assets/kishanlogo.png";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

interface NavLinkProps {
  url: string;
  children: ReactNode;
}

export const Header = () => {
  return (
    <header className="flex sticky backdrop-blur-md top-0 max-w-full w-[924px] mx-auto mb-8 p-4 justify-between align-middle z-10">
      <Link href={Routes.home}>
        <div
          className="cursor-pointer span flex justify-center items-center 
        bg-gray-900 rounded-full h-[45px] w-[45px] hover:rotate-[360deg] 
        duration-700 ease-real-in-out transition-all shadow-2xl shadow-gray-500"
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
        <div className="flex gap-3 items-center">
          <NavLink url={Routes.projects}>Projects</NavLink>
          <NavLink url={Routes.aboutMe}>About Me</NavLink>
          <ThemeSwitcherButton />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ url, children }: NavLinkProps) => (
  <Link href={url} passHref scroll={false}>
    <button
      className="font-normal transition-all ease-in-out duration-200 rounded-md px-4 py-2
    hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200"
    >
      {children}
    </button>
  </Link>
);

const ThemeSwitcherButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      aria-label="Switch Theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <FiSun /> : <FaMoon />}
    </button>
  );
};
