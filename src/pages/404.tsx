import React from "react";
import { MainLayout } from "@layout";
import Image from "next/image";
import F04Img from "../../public/assets/404.png";
import F04ImgDark from "../../public/assets/404Dark.png";
import Link from "next/link";

import Head from "next/head";
import { useTheme } from "next-themes";

function Four04Page() {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <Head>
        <title>404 Not Found - Kishan </title>
      </Head>
      <MainLayout>
        <div className="flex flex-col">
          <Image
            src={resolvedTheme == "dark" ? F04ImgDark : F04Img}
            alt="404 Image"
            placeholder="blur"
          ></Image>
          <Link href="/" passHref replace={true}>
            <button>Go Home</button>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}

export default Four04Page;
