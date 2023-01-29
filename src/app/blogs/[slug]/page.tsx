import React from "react";
import Image from "next/image";
import { getAllPostByUsername, getPostBySlug } from "@functions/hashnode";

export async function generateStaticParams() {
  const posts = await getAllPostByUsername("kishanhitk");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Index = async ({ params: { slug } }: any) => {
  const { coverImage, title, dateAdded, content, reactions } =
    await getPostBySlug(slug, "kishanhitk");

  const userLocalDate = new Date(dateAdded).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function createMarkup() {
    return { __html: content };
  }

  return (
    <div className="prose dark:prose-invert">
      <h1 className="dark:text-white">{title}</h1>
      <p className="-mt-5 text-gray-500">{userLocalDate}</p>
      <Image src={coverImage} alt={title} height={900} width={900} />
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

export default Index;
