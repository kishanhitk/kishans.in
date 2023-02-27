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
    description: brief,
    openGraph: {
      title: title,
      description: brief,
      images: [
        {
          url: "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fstock%2Funsplash%2F16ep3TGZR-0%2Fupload%2F4053f43ef8727c52dde7a6ce9d4f655e.jpeg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
        },
      ],
      type: "article",
      url: `https://kishans.in/blogs/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPostByUsername("kishanhitk");
  return posts.map((post) => ({
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
