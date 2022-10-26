import React, { ReactNode } from "react";

interface IconButtonProps {
  href: string;
  ariaLabel: string;
  icon: ReactNode;
}

export const IconButton = ({ href, ariaLabel, icon }: IconButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="bg-gray-100 transition-all ease-in-out duration-200 p-3
  hover:bg-blue-100 active:bg-blue-200 rounded-full dark:bg-gray-800"
    >
      {icon}
    </a>
  );
};
