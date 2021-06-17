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
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import KishanLogo from "../../public/assets/kishanlogo.png";
import Image from "next/image";
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
      width="1024px"
      maxW="100%"
      m="0 auto"
      mb={8}
      align="center"
      p={4}
      top="0"
      zIndex={10}
      bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44,0.8)")}
      style={{
        backdropFilter: `saturate(180%) blur(20px)`,
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
              <Image src={KishanLogo} alt="Kishan"></Image>
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
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
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
  <NextLink href={url}>
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
