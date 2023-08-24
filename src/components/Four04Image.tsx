"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Four04Dark from "../../public/assets/404Dark.png";
import Four04 from "../../public/assets/404.png";

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
      className="mx-auto"
      placeholder="blur"
      src={resolvedTheme == "dark" ? Four04Dark : Four04}
      alt="404 Image"
    ></Image>
  );
};
