import React from "react";
import { MainLayout } from "@layouts";
import { NextSeo } from "next-seo";
import {
  Box,
  Avatar,
  Heading,
  VStack,
  Text,
  Link,
  Center,
  Container,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { SocialLinks } from "@components";
import KishanPhoto from "../../public/assets/profile-pic.png";

const AboutPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="About Me – Kishan"
        canonical="https://kishans.in/about"
        description="About Kishan Kumar - Full Stack Developer"
        openGraph={{
          url: "https://kishans.in/about",
          title: "About Me – Kishan",
          description: "About Kishan Kumar - Full Stack Developer",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.webp",
              alt: "Og Image Alt",
            },
          ],
        }}
      />

      <VStack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Box textAlign="center" width="100%">
          <Heading
            letterSpacing="tight"
            mb={2}
            as="h1"
            size="2xl"
            fontWeight={900}
          >
            About me
          </Heading>
          <Container bg="purple.400" p="0.5" w="180px" h="180px" rounded="full">
            <Image
              priority={true}
              height="180px"
              width="180px"
              src={KishanPhoto}
              placeholder="blur"
              alt="Kishan Kumar Photo"
            ></Image>
          </Container>
        </Box>

        <Box>
          <Text mb={3}>
            I&apos;m a self-taught developer from India. I love building cool
            stuff for web and mobile using:
            <Box as="strong"> Javascript/Typescript</Box>,{" "}
            <Box as="strong"> ReactJS</Box>,<Box as="strong"> NodeJS, </Box>
            <Box as="strong">Flutter</Box>, and <Box as="strong">AWS</Box>.
          </Text>

          <Text mb={3}>
            I document my journey through my <Link href="/blog">blogs</Link>.
            When I am not writing code, I am reading books on life and startups.
            I love listening to lofi while coding.
            <br />
            <Box as="strong">Are you working on something exciting?</Box> <br />
            Let&#39;s talk 👇
          </Text>
          <SocialLinks />
        </Box>
      </VStack>
    </MainLayout>
  );
};

export default AboutPage;
