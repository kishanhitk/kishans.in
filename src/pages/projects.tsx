import NextLink from "next/link";
import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";
import { MainLayout } from "@layouts";

const BlogPage = () => {
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
            {/* {posts
              ?.sort(
                (prevPost, nextPost) =>
                  Number(new Date(nextPost.publishedAt)) -
                  Number(new Date(prevPost.publishedAt))
              )
              .filter((frontMatter) =>
                frontMatter.title
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map(({ title, slug, summary }) => (
                <NextLink href={`/blog/${slug}`} key={slug}>
                  <a>
                    <VStack align="flex-start" spacing={3}>
                      <Heading
                        pos="relative"
                        as="h3"
                        size="md"
                        _hover={{
                          color: "green.500",
                        }}
                      >
                        {title}
                      </Heading>
                      <Text>{summary}</Text>
                    </VStack>
                  </a>
                </NextLink>
              ))} */}
          </VStack>
        </Box>
      </VStack>
    </MainLayout>
  );
};

export default BlogPage;
