import { Box, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";

function SocialLinks() {
  return (
    <Box>
      <HStack>
        <HStack spacing={3}>
          <IconButton
            as="a"
            href="https://github.com/kishanhitk"
            aria-label="Github"
            icon={<FiGithub />}
            borderRadius="100%"
          />

          <IconButton
            as="a"
            href="https://twitter.com/jst_kishan"
            aria-label="Twitter"
            borderRadius="100%"
            icon={<FiTwitter />}
          />

          <IconButton
            as="a"
            href="https://www.linkedin.com/in/kishanju/"
            aria-label="Twitter"
            borderRadius="100%"
            icon={<FaLinkedinIn />}
          />

          <IconButton
            as="a"
            href="mailto:kishansharma1231@gmail.com"
            aria-label="Gmail"
            icon={<FiMail />}
            borderRadius="100%"
          />
        </HStack>
      </HStack>
    </Box>
  );
}

export default SocialLinks;
