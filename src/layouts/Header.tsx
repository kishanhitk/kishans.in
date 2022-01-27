import React from "react";
import NextLink from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { Routes } from "@config";
import KishanLogo from "../../public/assets/kishanlogo.png";
import Image from "next/image";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "@components/NavLink";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className="sticky flex z-10 justify-between w-[924px] mx-auto mb-8 items-center p-4 top-0 transition-all duration-200 ease-in-out backdrop-blur-lg">
      <div>
        <NextLink href={Routes.home}>
          <a>
            <div className="shadow-md w-12 h-12 rounded-full hover:rotate-[360deg] transition-all ease-in-out duration-700">
              <Image
                priority={true}
                src={KishanLogo}
                placeholder="empty"
                alt="Kishan"
              ></Image>
            </div>
            {/* </Box> */}
          </a>
        </NextLink>
      </div>

      {/* Nav */}
      <nav>
        <div className="flex gap-2">
          <div className="flex gap-3">
            <NavLink url={Routes.projects}>Projects</NavLink>
            <NavLink url={Routes.aboutMe}>About me</NavLink>
          </div>
          <button
            onClick={toggleColorMode}
            aria-label="theme-switcher"
            className="p-3 rounded-full hover:bg-white/20 active:bg-white/30 transition-all ease-in-out duration-300"
          >
            {colorMode === "light" ? <FaMoon /> : <FiSun />}
          </button>
        </div>
      </nav>
    </header>
  );
};
