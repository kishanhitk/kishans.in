import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { MainLayout } from "@layouts";
import React from "react";
import { SocialLinks } from "@components";
import { NextSeo } from "next-seo";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { HashnodePost } from "@types";

export const config = {
  unstable_runtimeJS: false,
};

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <VStack align="flex-start" spacing={8}>
          <Heading as="h1" size="2xl" fontWeight="900">
            Hi, I&apos;m Kishan
          </Heading>
          <Text>
            I&apos;m a self taught developer from India. I love building cool
            stuffs for web and mobile using
            <Box as="strong">: Javascript/Typescript</Box>,{" "}
            <Box as="strong"> ReactJS</Box>,<Box as="strong"> NodeJS, </Box>
            <Box as="strong">Flutter</Box>, and <Box as="strong">GraphQL</Box>.
          </Text>
          <SocialLinks />

          <Heading pt="10px" size="lg">
            Recent Posts
          </Heading>
          {posts.map(({ cuid, title, brief, slug }) => (
            <Box
              mb="10px"
              as="a"
              href={`https://blog.kishans.in/${slug}`}
              cursor="pointer"
              key={cuid}
            >
              <Heading pb="7px" size="md">
                {title}
              </Heading>
              <Text>{brief}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </MainLayout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        user(username: "kishanhitk") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
              cuid
            }
          }
        }
      }
    `,
  });
  const posts: HashnodePost[] = data.user.publication.posts;
  return {
    props: {
      posts,
    },
    revalidate: 180,
  };
};
export default HomePage;
