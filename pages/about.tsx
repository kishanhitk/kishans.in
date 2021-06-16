import React from "react";
import { MainLayout } from "layouts";
import { NextSeo } from "next-seo";
import { Box, Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import SocialLinks from "components/SocialLinks";

const AboutPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="About Me – Kishan"
        canonical="https://kishans.in/about"
        openGraph={{
          url: "https://kishans.in/about",
          title: "About Me – Kishan",
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
          <Avatar
            size="2xl"
            name="Kishan Kumar"
            src="./assets/kishan.jpg"
            textAlign="center"
          />
        </Box>

        <Box>
          <Text mb={3}>
            I'm a self taught developer from India. I love building cool stuffs
            for web and mobile using
            <Box as="strong">: Javascript/Typescript</Box>,{" "}
            <Box as="strong"> ReactJS</Box>,<Box as="strong"> NodeJS, </Box>
            <Box as="strong">Flutter</Box>, and <Box as="strong">GraphQL</Box>.
          </Text>

          <Text mb={3}>
            I love designing and developing apps for mobile and web. When I am
            not writing code, I am reading an article or blog post to keep
            myself updated with the latest happening in the world of tech. I
            like to listen to Hindustani Classical instrumental music while
            coding, mostly Sitar of Pandit Ravi Shankar.
          </Text>

          <SocialLinks />
        </Box>
      </VStack>
    </MainLayout>
  );
};

export default AboutPage;
