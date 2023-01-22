"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Four04Image = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Image
      width={500}
      height={500}
      src={resolvedTheme == "dark" ? "/assets/404dark.png" : "/assets/404.png"}
      alt="404 Image"
    ></Image>
  );
};
