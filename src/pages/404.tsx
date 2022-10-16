import React from "react";
import { MainLayout } from "@layout";
import Image from "next/image";
import F04Img from "../../public/assets/404.png";
import F04ImgDark from "../../public/assets/404Dark.png";
import Link from "next/link";

import Head from "next/head";

function Four04Page() {
  //   const img = useColorModeValue(F04Img, F04ImgDark);
  //   TODO: Switch between light and dark images based on mode
  return (
    <>
      <Head>
        <title>404 Not Found - Kishan </title>
      </Head>
      <MainLayout>
        <div className="flex flex-col">
          <Image src={F04Img} alt="404 Image" placeholder="blur"></Image>
          <Link href="/" passHref replace={true}>
            <button>Go Home</button>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}

export default Four04Page;