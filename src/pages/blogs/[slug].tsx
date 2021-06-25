import client from "@apollo-client";
import { gql } from "@apollo/client";
import { HashnodePost } from "@types";
import { GetStaticProps } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { MainLayout } from "@layouts";
import { Heading } from "@chakra-ui/react";

function BlogPage({ post }) {
  return (
    <MainLayout>
      <Heading mb={5}>{post.title}</Heading>
      <ReactMarkdown components={ChakraUIRenderer()}>
        {post.contentMarkdown}
      </ReactMarkdown>
    </MainLayout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        user(username: "kishanhitk") {
          publication {
            posts(page: 0) {
              slug
            }
          }
        }
      }
    `,
  });
  const posts: HashnodePost[] = data.user.publication.posts;
  console.log(posts[0].slug);
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug;
  const { data } = await client.query({
    query: gql`
      query {
        post(
          hostname: "blog.kishans.in"
          slug: "${slug}"
        ) {
          title
          brief
          contentMarkdown
        }
      }
    `,
  });
  const post = data.post;
  return {
    props: {
      post,
    },
  };
};

export default BlogPage;
