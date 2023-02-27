import PageWrapper from "@components/PageWrapper";
import { SocialLinks } from "@components/SocialLinks";
import Image from "next/image";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Kishan Kumar is a self-taught developer from India. He loves building cool stuff for web and mobile using Javascript/Typescript, ReactJS, NodeJS, Flutter, and AWS.",
  openGraph: {
    locale: "en_IE",
    url: "https://www.kishans.in/about",
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

export const revalidate = 86400;

export default function Page() {
  return (
    <PageWrapper>
      <div className="mb-4 flex max-w-[700px] flex-col items-start justify-center gap-6">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold md:text-5xl">About Me</h1>
        </div>
        <div className="h-[181px] w-[181px] self-center rounded-full bg-purple-500 p-[1px]">
          <Image
            height={180}
            width={180}
            priority={true}
            src="/assets/profile-pic.png"
            alt="Kishan Kumar Photo"
          ></Image>
        </div>
        <p className="text-md">
          I&apos;m a self-taught developer from India. I love building cool
          stuff for web and mobile using
          <strong>: Javascript/Typescript</strong>, <strong> ReactJS</strong>,{" "}
          <strong> NodeJS</strong>, <strong> Flutter</strong>, and
          <strong> AWS</strong>.
        </p>
        <p className="text-md">
          I document my journey through my{" "}
          <a href="/blog" className="hover:underline">
            blogs
          </a>
          . When I am not writing code, I am reading books on life and startups.
          I love listening to lofi while coding.
          <br />
          <strong>Are you working on something exciting?</strong> <br />
          Let&#39;s talk 👇
        </p>
        <SocialLinks />
      </div>
    </PageWrapper>
  );
}
