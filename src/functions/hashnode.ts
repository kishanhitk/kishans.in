import type { HashnodePost, HashnodePostFull } from "../types/hashnode";

const API_URL = "https://gql.hashnode.com";

async function fetchGraphQL<T = any>(
  query: string,
  variables: object,
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
  host: string,
): Promise<HashnodePost[]> => {
  const query = /* GraphQL */ `
    query Publication($host: String!) {
      publication(host: $host) {
        id
        id
        posts(first: 11) {
          edges {
            node {
              id
              id
              title
              brief
              cuid
              slug
              publishedAt
            }
          }
        }
      }
    }
  `;

  const { data } = await fetchGraphQL(query, { host });
  const posts: HashnodePost[] = data.publication.posts.edges.map(
    (post: any) => post.node,
  );
  return posts;
};

export const getPostBySlug = async (
  slug: string,
  hostname: string,
): Promise<HashnodePostFull> => {
  const query = /* GraphQL */ `
    query Publication($slug: String!, $hostname: String!) {
      publication(host: $hostname) {
        id
        id
        post(slug: $slug) {
          id
          id
          title
          brief
          coverImage {
            url
          }
          updatedAt
          publishedAt
          content {
            markdown
            html
          }
        }
      }
    }
  `;
  const { data } = await fetchGraphQL(query, { slug, hostname });
  const post: HashnodePostFull = data.publication.post;
  return post;
};

export const getPostMetadataBySlug = async (
  slug: string,
  hostname: string,
): Promise<HashnodePostFull> => {
  const query = /* GraphQL */ `
    query Publication($slug: String!, $hostname: String!) {
      publication(host: $hostname) {
        id
        id
        post(slug: $slug) {
          id
          id
          title
          updatedAt
          coverImage {
            url
          }
          slug
          brief
        }
      }
    }
  `;

  const { data } = await fetchGraphQL(query, { slug, hostname });
  const post: HashnodePostFull = data.publication.post;
  return post;
};
