import { Text, Box, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { Copyright } from "../components/Copyright";
import Header from "../components/Header";
import AboutPage from "../layouts/AboutPage";
import classes from "./index.module.css";

function Home() {
  return (
    <>
      <div className={classes.main}>
        <header className={classes.headerContainer}>
          <Link href="/" className={classes.name}>
            <Heading>Kishan</Heading>
          </Link>
          <div className={classes.navLinks}>
            <Link className={classes.link} href="/about">
              About
            </Link>
            <Link href="/blog" className={classes.link}>
              Blog
            </Link>
            <ColorModeSwitcher className={classes.link} />
          </div>
        </header>
        <Heading textAlign="center" m={5} className={classes.heroText}>
          Hey, I'm Kishan! 👋
        </Heading>
        <Text textAlign="center" fontSize="xl" m={3}>
          I'm a developer from India in love with all things React. I've also
          worked with different languages like JavaScript, TypeScript, Dart and
          C++, as well as Node, Flutter and Redux.
        </Text>
        <footer className={classes.footer}>
          Made with Next.js • Hosted on Vercel • View source on Github • Find me
          on Twitter
        </footer>
      </div>
    </>
  );
}

export default Home;
