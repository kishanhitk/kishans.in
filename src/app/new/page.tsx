export const revalidate = 180;
import client from "@apollo-client";
import { gql } from "@apollo/client";
import { NextSeo } from "next-seo";
import { SocialLinks } from "@components/SocialLinks";
import { HashnodePost } from "@types";
import PageWrapper from "@components/PageWrapper";

const getPosts = async () => {
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
  return posts;
};

const Home = async () => {
  const posts = await getPosts();
  return (
    <PageWrapper>
      <NextSeo
        useAppDir={true}
        title="Kishan Kumar - Full Stack Developer"
        description="Blogs and Projects by Kishan"
        canonical="https://kishans.in"
        openGraph={{
          url: "https://kishans.in",
          title: "Kishan Kumar - Full Stack Developer",
          description: "Blogs and Projects by Kishan",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.png",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white">
          Hi, I&apos;m Kishan
        </h1>
        <p className="text-md">
          I&apos;m a self-taught developer from India. I love building cool
          stuff for web and mobile using
          <strong>: Javascript/Typescript</strong>, <strong> ReactJS</strong>,{" "}
          <strong> NodeJS</strong>, <strong> Flutter</strong>, and
          <strong> AWS</strong>.
        </p>
        <SocialLinks />
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        {posts?.map((post: HashnodePost) => (
          <a
            key={post.slug}
            className="mb-10px cursor-pointer"
            href={`https://blog.kishans.in/${post.slug}`}
          >
            <h3 className="font-bold text-xl mb-1">{post.title}</h3>
            <p className="font-light">{post.brief}</p>
          </a>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Home;
