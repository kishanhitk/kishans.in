import React, { ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  ButtonProps,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Routes } from "@config";
import KishanLogo from "../../public/assets/kishanlogo.png";
import Image from "next/image";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
interface NavLinkProps extends ButtonProps {
  url: string;
  children: ReactNode;
}
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      position="sticky"
      justifyContent="space-between"
      width="924px"
      maxW="100%"
      m="0 auto"
      mb={8}
      align="center"
      p={4}
      top="0"
      zIndex={10}
      bg={useColorModeValue("rgba(255, 255, 255, 0.5)", "rgba(26, 32, 44,0.8)")}
      style={{
        backdropFilter: `saturate(180%) blur(10px)`,
        transition: "background-color 0.1 ease-in-out",
      }}
    >
      <Box>
        <NextLink href={Routes.home}>
          <Link _hover={{ textDecor: "none" }}>
            <Box
              _hover={{
                boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
                rotate: "350deg",
                transform: "rotate(360deg)",
              }}
              as="span"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.900"
              color="white"
              w="45px"
              transition="transform 0.7s ease-in-out"
              h="45px"
              borderRadius="100%"
              boxShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
            >
              <Image
                priority={true}
                src={KishanLogo}
                placeholder="empty"
                alt="Kishan"
              ></Image>
            </Box>
          </Link>
        </NextLink>
      </Box>

      {/* Nav */}
      <Box as="nav">
        <HStack>
          <HStack>
            <NavLink url={Routes.projects}>Projects</NavLink>
            <NavLink url={Routes.aboutMe}>About me</NavLink>
          </HStack>
          <IconButton
            onClick={toggleColorMode}
            aria-label="theme-switcher"
            icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
            size="md"
            borderRadius="100px"
            bg="none"
          />
        </HStack>
      </Box>
    </Flex>
  );
};

const NavLink = ({ url, children }: NavLinkProps) => (
  <NextLink href={url} passHref scroll={false}>
    <Link _hover={{ textDecor: "none" }}>
      <Button
        bg="none"
        fontWeight="normal"
        _hover={{ bg: "blue.100", color: "blue.700" }}
        _active={{ bg: "blue.200" }}
      >
        {children}
      </Button>
    </Link>
  </NextLink>
);
