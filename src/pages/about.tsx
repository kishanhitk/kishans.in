import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";
import { MainLayout } from "../layout";
import KishanPhoto from "../../public/assets/profile-pic.png";
import Link from "next/link";
import { SocialLinks } from "../components/SocialLinks";

export const AboutPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="About Me – Kishan"
        canonical="https://kishans.in/about"
        description="About Kishan Kumar - Full Stack Developer"
        openGraph={{
          url: "https://kishans.in/about",
          title: "About Me – Kishan",
          description: "About Kishan Kumar - Full Stack Developer",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.webp",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <div className="flex flex-col gap-6 justify-center items-start max-w-[700px] mb-4">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        </div>
        <div className="rounded-full self-center bg-purple-500 h-[180px] w-[180px] p-[1px]">
          <Image
            className="border border-blue-800"
            priority={true}
            height="180px"
            width="180px"
            src={KishanPhoto}
            placeholder="blur"
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
    </MainLayout>
  );
};

export default AboutPage;
