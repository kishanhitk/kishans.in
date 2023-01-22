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
      className="rounded-full bg-gray-100 p-3 transition-all duration-200
  ease-in-out hover:bg-blue-100 active:bg-blue-200 dark:bg-gray-800"
    >
      {icon}
    </a>
  );
};
