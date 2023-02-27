import PostCard from "@components/PostCard";
import { getAllPostByUsername } from "@functions/hashnode";
import { HashnodePost } from "@types";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Blogs by Kishan, a self-taught developer from India. He loves building cool stuff for web and mobile using Javascript/Typescript, ReactJS, NodeJS, Flutter, and AWS.",
  openGraph: {
    locale: "en_IE",
    url: "https://www.kishans.in/blogs",
    images: [
      {
        url: "https://www.kishans.in/assets/kishanlogo.webp",
        width: 1200,
        height: 630,
        alt: "Kishan Kumar | Full Stack Developer",
      },
    ],
  },
};

export const revalidate = 86400; // revalidate every day

export async function generateStaticParams() {
  const posts = await getAllPostByUsername("kishanhitk");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const page = async () => {
  const posts = await getAllPostByUsername("kishanhitk");
  return (
    <>
      <h2 className="mb-10 text-3xl font-bold">Recent Posts</h2>
      {posts?.map((post: HashnodePost) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </>
  );
};

export default page;
