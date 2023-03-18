import PageWrapper from "@components/PageWrapper";
import { SocialLinks } from "@components/SocialLinks";
import Image from "next/image";
import Link from "next/link";
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
        url: "https://www.kishans.in/assets/kishans-og-banner.png",
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
        <p className="text-md leading-7">
          Hey there! I&apos;m a self-taught full-stack developer hailing from
          India who loves hacking cool stuff! <strong>Next.js</strong> and{" "}
          <strong>Remix.run</strong> are my go-to weapons, but sometimes, I dive
          into the world of NFT smart contracts with <strong>Scilla</strong> on{" "}
          <strong>Zilliqa</strong>. You could say I&apos;m a jack of all trades,
          master of fun. 😄
        </p>
        <p className="text-md leading-7">
          I&apos;ve had my hands on two major NFT smart contracts for{" "}
          <strong>The Soulless Citadel</strong>, the largest NFT project on
          <strong> Zilliqa.</strong> One of these bad boys is a full-blown NFT
          marketplace, packed with bidding, listing, purchasing, and more. The
          other is an NFT minting contract with fancy discount mechanisms like
          premining and whitelist. Oh, and I also whipped up the{" "}
          <strong>GraphQL API</strong> for the Soulless Game, a real-time card
          game where you can play with the NFTs you own. Pretty cool, huh?
        </p>
        <p className="text-md leading-7">
          When I&apos;m not busy typing away, I love sharing my coding
          adventures on my <Link href="/blog">blog</Link>. I also unwind with
          books on life and startups, and nothing beats coding with some chill
          lofi beats in the background. 🎧
        </p>
        <p className="text-md leading-7">
          So, are you working on something that&apos;s got you jumping out of
          your seat with excitement? Let&apos;s chat about it! Drop me a line
          below. 👇😉
        </p>
        <SocialLinks />
      </div>
    </PageWrapper>
  );
}
