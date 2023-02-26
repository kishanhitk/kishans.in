import client from "@apollo-client";
import { gql } from "@apollo/client";
import { HashnodePost, HashnodePostFull } from "@types";

export const getAllPostByUsername = async (username: string) => {
  const { data } = await client.query({
    query: gql`
      query Posts($username: String!) {
        user(username: $username) {
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
    variables: {
      username,
    },
  });
  const posts: HashnodePost[] = data.user.publication.posts;
  return posts;
};

export const getPostBySlug = async (slug: string, hostname: string) => {
  const { data } = await client.query({
    query: gql`
      query Post($slug: String!, $hostname: String!) {
        post(slug: $slug, hostname: $hostname) {
          title
          dateAdded
          coverImage
          content
          slug
        }
      }
    `,
    variables: {
      slug,
      hostname,
    },
  });
  const post = data.post;
  return post as HashnodePostFull;
};
