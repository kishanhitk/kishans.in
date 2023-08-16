import React from "react";
import Image from "next/image";
import {
  getAllPostByUsername,
  getPostBySlug,
  getPostMetadataBySlug,
} from "@functions/hashnode";
import { Metadata } from "next/types";

export const revalidate = 86400; // revalidate every day

export async function generateMetadata({
  params: { slug },
}: any): Promise<Metadata> {
  const { title, brief, coverImage } = await getPostMetadataBySlug(
    slug,
    "kishanhitk"
  );
  return {
    title: title,
    description: brief.slice(0, 150),

    openGraph: {
      title: title,
      description: brief,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
      url: `https://kishans.in/blogs/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPostByUsername("kishanhitk");
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

const Index = async ({ params: { slug } }: any) => {
  const { coverImage, title, dateAdded, content } = await getPostBySlug(
    slug,
    "kishanhitk"
  );

  const userLocalDate = new Date(dateAdded).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function createMarkup() {
    return { __html: content };
  }

  return (
    <>
      <div className="prose dark:prose-invert">
        <h1 className="dark:text-white">{title}</h1>
        <p className="-mt-5 text-gray-500">{userLocalDate}</p>
        <Image src={coverImage} alt={title} height={900} width={900} />
        <article
          data-clarity-region="article"
          dangerouslySetInnerHTML={createMarkup()}
        ></article>
      </div>
      <p className="mt-10 border-t pt-5">
        Liked this article? I keep writing about web development, design, and
        other stuff. <br />
        Follow me on
        <span>
          <a
            href={`https://blog.kishans.in/${slug}`}
            className="underline decoration-dotted"
          >
            Hashnode
          </a>{" "}
        </span>
        to get notified when I publish a new article.
      </p>
    </>
  );
};

export default Index;