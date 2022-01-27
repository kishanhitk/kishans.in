import React, { ReactNode } from "react";
import NextLink from "next/link";

interface NavLinkProps {
  url: string;
  children: ReactNode;
}

export const NavLink = ({ url, children }: NavLinkProps) => (
  <NextLink href={url} passHref scroll={false}>
    <button className="px-4 py-2 rounded-md bg-transparent hover:bg-blue-100 hover:text-blue-700 active:bg-blue-200 transition ease-in-out duration-300">
      {children}
    </button>
  </NextLink>
);
