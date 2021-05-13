import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <>
      <Flex maxW="500" justifyContent="space-between" background="gray">
        <Text alignSelf="flex-start">Kishan </Text>
        <Flex></Flex>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </Flex>
    </>
  );
}

export default Header;
