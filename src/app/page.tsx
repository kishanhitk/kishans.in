"use client";
import React from "react";
import { motion, Variant } from "framer-motion";
import { SocialLinks } from "@components/SocialLinks";
import PageWrapper from "@components/PageWrapper";
import Paragraph from "@components/Paragraph";
import RecentPosts from "@components/RecentPosts";
import { Suspense } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <PageWrapper>
      <motion.div 
        className="flex flex-col items-start gap-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 
          className="text-4xl font-bold dark:text-white md:text-5xl"
          variants={fadeInUp}
        >
          Hi, I&apos;m Kishan
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <Paragraph>
            I&apos;m a self-taught full-stack developer hailing from India who
            loves hacking cool stuff! <strong>Next.js</strong> and{" "}
            <strong>Remix.run</strong> are my go-to weapons, but sometimes, I dive
            into the world of NFT smart contracts with <strong>Scilla</strong> on{" "}
            <strong>Zilliqa</strong>. You could say I&apos;m a jack of all trades,
            master of fun. 😄
          </Paragraph>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <SocialLinks />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Suspense fallback={<div />}>
            <RecentPosts/>
          </Suspense>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};

export default Home;