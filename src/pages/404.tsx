import React, { useEffect, useState } from "react";
import { MainLayout } from "@layout";
import Image from "next/image";
import F04Img from "../../public/assets/404.png";
import F04ImgDark from "../../public/assets/404Dark.png";
import Link from "next/link";

import Head from "next/head";
import { useTheme } from "next-themes";

export default function Four04Page() {
  return (
    <>
      <Head>
        <title>404 Not Found - Kishan </title>
      </Head>
      <MainLayout>
        <div className="flex flex-col">
          <Four04Image />
          <Link href="/" passHref replace={true}>
            <button>Go Home</button>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}

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
      src={resolvedTheme == "dark" ? F04ImgDark : F04Img}
      alt="404 Image"
      placeholder="blur"
    ></Image>
  );
};
