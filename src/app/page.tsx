import { SocialLinks } from "@components/SocialLinks";
import { HashnodePost } from "@types";
import PageWrapper from "@components/PageWrapper";
import { getAllPostByUsername } from "@functions/hashnode";
import PostCard from "@components/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kishan Kumar - Full Stack Developer",
  description:
    "Kishan is a self-taught developer from India. He loves building cool stuff for web and mobile using Javascript/Typescript, ReactJS, NodeJS, Flutter, and AWS.",
  openGraph: {
    locale: "en_IE",
    url: "https://www.kishans.in",
    images: [
      {
        url: "https://www.kishans.in/assets/kishans-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Kishan Kumar | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Kumar - Full Stack Developer",
    description:
      "Kishan is a self-taught developer from India. He loves building cool stuff for web and mobile using Javascript/Typescript, ReactJS, NodeJS, Flutter, and AWS.",
    siteId: "2258969065",
    creator: "@jst_kishan",
    creatorId: "2258969065",
    images: ["https://www.kishans.in/assets/kishans-og-banner.png"],
  },
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
          I&apos;m a self-taught
          <strong> full-stack developer </strong>
          from India. I love hacking cool stuff. Primarily with
          <strong>: Next.js</strong> or <strong>Remix.run</strong>, sometimes
          NFT smart contracts with <strong>Scilla</strong> on{" "}
          <strong>Zilliqa</strong>. Jack of all trades, you can say. Let&apos;s
          build something cool together!
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
