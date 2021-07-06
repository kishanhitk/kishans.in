import React from "react";
import { MainLayout } from "@layouts";
import Image from "next/image";
import F04Img from "../../public/assets/404.png";
import F04ImgDark from "../../public/assets/404Dark.png";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import { VStack } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Head from "next/head";

function Four04Page() {
  const img = useColorModeValue(F04Img, F04ImgDark);
  return (
    <>
      <Head>
        <title>404 Not Found - Kishan </title>
      </Head>
      <MainLayout>
        <VStack>
          <Image src={img} alt="404 Image" placeholder="blur"></Image>
          <Link href="/" passHref replace={true}>
            <Button variant="solid" colorScheme="messenger">
              Go Home
            </Button>
          </Link>
        </VStack>
      </MainLayout>
    </>
  );
}

export default Four04Page;
