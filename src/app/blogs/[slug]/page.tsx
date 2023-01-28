import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getAllPostByUsername, getPostBySlug } from "@functions/hashnode";

export async function generateStaticParams() {
  const posts = await getAllPostByUsername("kishanhitk");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Index = async ({ params: { slug } }: any) => {
  const { contentMarkdown, coverImage, title, dateAdded } = await getPostBySlug(
    slug,
    "kishanhitk"
  );

  const userLocalDate = new Date(dateAdded).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="prose">
      <h1>{title}</h1>
      <p className="-mt-5 text-gray-500">{userLocalDate}</p>
      <Image src={coverImage} alt={title} height={500} width={500} />
      <ReactMarkdown>{contentMarkdown}</ReactMarkdown>
    </div>
  );
};

export default Index;
