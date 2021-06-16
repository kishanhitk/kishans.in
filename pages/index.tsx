import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MainLayout } from "layouts";
import React from "react";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

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

          <Box>
            <HStack>
              <HStack spacing={3}>
                <IconButton
                  as="a"
                  href="https://github.com/kishanhitk"
                  aria-label="Github"
                  icon={<FiGithub />}
                  borderRadius="100%"
                />

                <IconButton
                  as="a"
                  href="https://twitter.com/jst_kishan"
                  aria-label="Twitter"
                  borderRadius="100%"
                  icon={<FiTwitter />}
                />

                <IconButton
                  as="a"
                  href="https://www.linkedin.com/in/kishanju/"
                  aria-label="Twitter"
                  borderRadius="100%"
                  icon={<FaLinkedinIn />}
                />

                <IconButton
                  as="a"
                  href="mailto:kishansharma1231@gmail.com"
                  aria-label="Gmail"
                  icon={<FiMail />}
                  borderRadius="100%"
                />
              </HStack>
            </HStack>
          </Box>
          <NextLink href="https://blog.kishans.in">
            <Button mt="20" colorScheme="blue">
              Read My Blogs
            </Button>
          </NextLink>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
