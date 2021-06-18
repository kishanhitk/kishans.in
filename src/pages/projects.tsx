import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { NextSeo } from "next-seo";
import { MainLayout } from "@layouts";
import { ProjectList } from "@data/project";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const BlogPage = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const tagBg = useColorModeValue("blue.200", "blue.800");
  return (
    <MainLayout>
      <NextSeo
        title="Projects – Kishan"
        description="Cool stuffs built by Kishan"
        canonical="https://kishans.in/projects"
        openGraph={{
          url: "https://kishans.in/projects",
          title: "Projects - Kishan",
          description: "Cool stuffs built by Kishan",
        }}
      />
      <VStack spacing={8} align="stretch">
        <VStack align="stretch" spacing={5}>
          <Heading as="h2" size="xl" fontWeight="900">
            Projects
          </Heading>
          <Text>
            {`I love learning new things everyday, and this list is a proof of work for the same.`}
          </Text>
        </VStack>

        <Box>
          <VStack spacing={8} align="flex-start">
            {ProjectList.sort(
              (prev, next) => prev.priority - next.priority
            ).map(({ title, slug, sourceUrl, liveUrl, summary, tags, img }) => (
              <Box
                key={slug}
                backgroundColor={cardBg}
                width="100%"
                px="30px"
                py="30px"
                rounded="10px"
              >
                <VStack height="100%" width="100%">
                  <Box rounded="20px">
                    <Image
                      src={img}
                      layout="intrinsic"
                      alt={title}
                      placeholder="blur"
                    ></Image>
                  </Box>
                  <VStack alignItems="flex-start" alignSelf="flex-start">
                    <HStack>
                      <Heading size="md">{title}</Heading>
                      <IconButton
                        as="a"
                        target="_blank"
                        href={liveUrl}
                        borderRadius="100%"
                        aria-label="live"
                      >
                        <IoOpenOutline />
                      </IconButton>
                      <IconButton
                        as="a"
                        target="_blank"
                        href={sourceUrl}
                        borderRadius="100%"
                        aria-label="source"
                      >
                        <FiGithub />
                      </IconButton>
                    </HStack>
                    <Text>{summary}</Text>
                    <Wrap>
                      {tags.map((tag) => (
                        <WrapItem key={tag}>
                          <Box backgroundColor={tagBg} rounded="5px" px="10px">
                            #{tag}
                          </Box>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </MainLayout>
  );
};

export default BlogPage;
