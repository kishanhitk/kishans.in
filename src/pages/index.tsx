import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { MainLayout } from "@layouts";
import React from "react";
import { SocialLinks } from "@components";
import { NextSeo } from "next-seo";

const HomePage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Kishan Kumar - Full Stack Developer"
        description="Blogs and Projects by Kishan"
        canonical="https://kishans.in"
        openGraph={{
          url: "https://kishans.in",
          title: "Kishan Kumar - Full Stack Developer",
          description: "Blogs and Projects by Kishan",
        }}
      />
      <Box>
        <VStack align="flex-start" spacing={5}>
          <Heading as="h1" size="2xl" fontWeight="900">
            Hey, I&apos;m Kishan
          </Heading>
          <Text>
            I&apos;m a self taught developer from India. I love building cool
            stuffs for web and mobile using
            <Box as="strong">: Javascript/Typescript</Box>,{" "}
            <Box as="strong"> ReactJS</Box>,<Box as="strong"> NodeJS, </Box>
            <Box as="strong">Flutter</Box>, and <Box as="strong">GraphQL</Box>.
          </Text>
          <SocialLinks />
          <Button
            as="a"
            href="https://blog.kishans.in"
            margin="300px"
            colorScheme="blue"
          >
            Read My Blogs
          </Button>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
