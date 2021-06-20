import client from "@apollo-client";
import { gql } from "@apollo/client";
import { HashnodePost } from "@types";
import { GetStaticProps } from "next";

function BlogPage({ post }) {
  return <div>{post.title}</div>;
}

export const getStaticPaths = async () => {
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
    redirect: {
      destination: `https://blog.kishans.in/${slug}`,
      permanent: false,
    },
  };
};

export default BlogPage;
