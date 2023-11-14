import { SocialLinks } from "@components/SocialLinks";
import PageWrapper from "@components/PageWrapper";
import { Metadata } from "next";
import Paragraph from "@components/Paragraph";
import RecentPosts from "@components/RecentPosts";
import { Suspense } from "react";

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




const Home =  () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-4xl font-bold dark:text-white md:text-5xl">
          Hi, I&apos;m Kishan
        </h1>
        <Paragraph>
          I&apos;m a self-taught full-stack developer hailing from India who
          loves hacking cool stuff! <strong>Next.js</strong> and{" "}
          <strong>Remix.run</strong> are my go-to weapons, but sometimes, I dive
          into the world of NFT smart contracts with <strong>Scilla</strong> on{" "}
          <strong>Zilliqa</strong>. You could say I&apos;m a jack of all trades,
          master of fun. 😄
        </Paragraph>
        <SocialLinks />
        <div>
            <Suspense fallback={<div />}>
          <RecentPosts/>
        </Suspense>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
