import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { MainLayout } from "layouts";
import React from "react";
import SocialLinks from "components/SocialLinks";

const HomePage = () => {
  return (
    <MainLayout>
      <Box>
        <VStack align="flex-start" spacing={5}>
          <Heading as="h1" size="2xl" fontWeight="900">
            Hey, I'm Kishan
          </Heading>
          <Text>
            I'm a self taught developer from India. I love building cool stuffs
            for web and mobile using
            <Box as="strong">: Javascript/Typescript</Box>,{" "}
            <Box as="strong"> ReactJS</Box>,<Box as="strong"> NodeJS, </Box>
            <Box as="strong">Flutter</Box>, and <Box as="strong">GraphQL</Box>.
          </Text>
          <SocialLinks />
          <NextLink href="https://blog.kishans.in">
            <Button margin="300px" colorScheme="blue">
              Read My Blogs
            </Button>
          </NextLink>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
