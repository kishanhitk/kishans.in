import PageWrapper from "@components/PageWrapper";
import { SocialLinks } from "@components/SocialLinks";
import { MainLayout } from "@layout";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <PageWrapper>
      <NextSeo
        useAppDir={true}
        title="About Me – Kishan"
        canonical="https://kishans.in/about"
        description="About Kishan Kumar - Full Stack Developer"
        openGraph={{
          url: "https://kishans.in/about",
          title: "About Me – Kishan",
          description: "About Kishan Kumar - Full Stack Developer",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.png",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
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
