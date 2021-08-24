import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";
type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
  };
  return (
    <Box>
      <Header />
      <Box w="650px" maxW="90%" m="0 auto" mb={20}>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ transition: "easeInOut", duration: 0.15 }}
        >
          {children}
        </motion.main>
      </Box>
    </Box>
  );
};
