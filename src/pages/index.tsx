import { gql } from "@apollo/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import client from "../apollo-client";
import { SocialLinks } from "../components/SocialLinks";
import { MainLayout } from "../layout";
import { HashnodePost } from "../types";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.webp",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-5xl font-bold">Hi, I&apos;m Kishan</h1>
        <p className="text-md">
          I&apos;m a self-taught developer from India. I love building cool
          stuff for web and mobile using
          <strong>: Javascript/Typescript</strong>, <strong> ReactJS</strong>,{" "}
          <strong> NodeJS</strong>, <strong> Flutter</strong>, and
          <strong> AWS</strong>.
        </p>
        <SocialLinks />
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        {posts.map((post: HashnodePost) => (
          <a
            key={post.slug}
            className="mb-10px cursor-pointer"
            href={`https://blog.kishans.in/${post.slug}`}
          >
            <h3 className="font-bold text-xl mb-1">{post.title}</h3>
            <p>{post.brief}</p>
          </a>
        ))}
      </div>
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

export default Home;
