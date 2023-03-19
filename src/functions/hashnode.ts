import { HashnodePost, HashnodePostFull } from "@types";

const API_URL = "https://api.hashnode.com"; // Replace with your GraphQL server URL

async function fetchGraphQL<T = any>(
  query: string,
  variables: object
): Promise<T> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
}

export const getAllPostByUsername = async (
  username: string
): Promise<HashnodePost[]> => {
  const query = `
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
  `;

  const { data } = await fetchGraphQL(query, { username });
  const posts: HashnodePost[] = data.user.publication.posts;
  return posts;
};

export const getPostBySlug = async (
  slug: string,
  hostname: string
): Promise<HashnodePostFull> => {
  const query = `
    query Post($slug: String!, $hostname: String!) {
      post(slug: $slug, hostname: $hostname) {
        title
        dateAdded
        coverImage
        content
        slug
        brief
      }
    }
  `;

  const { data } = await fetchGraphQL(query, { slug, hostname });
  const post: HashnodePostFull = data.post;
  return post;
};

export const getPostMetadataBySlug = async (
  slug: string,
  hostname: string
): Promise<HashnodePostFull> => {
  const query = `
    query Post($slug: String!, $hostname: String!) {
      post(slug: $slug, hostname: $hostname) {
        title
        dateAdded
        coverImage
        slug
        brief
      }
    }
  `;

  const { data } = await fetchGraphQL(query, { slug, hostname });
  const post: HashnodePostFull = data.post;
  return post;
};
