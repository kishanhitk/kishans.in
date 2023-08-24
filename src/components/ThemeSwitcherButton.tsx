"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export const ThemeSwitcherButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      onClick={() => setTheme(otherTheme)}
    >
      <FaMoon className="hidden dark:block" />
      <FiSun className="dark:hidden" />
    </button>
  );
};
