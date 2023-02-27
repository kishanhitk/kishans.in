import { SocialLinks } from "@components/SocialLinks";
import { HashnodePost } from "@types";
import PageWrapper from "@components/PageWrapper";
import { getAllPostByUsername } from "@functions/hashnode";
import PostCard from "@components/PostCard";

export const metadata = {
  title: "Kishan Kumar | Full Stack Developer",
};

export const revalidate = 86400; // revalidate every day

const getPosts = async () => {
  return getAllPostByUsername("kishanhitk");
};

const Home = async () => {
  const posts = await getPosts();
  return (
    <PageWrapper>
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-4xl font-bold dark:text-white md:text-5xl">
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
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Home;
