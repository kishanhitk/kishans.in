import { m } from "framer-motion";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
  };
  return (
    <div>
      <m.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ transition: "easeInOut", duration: 0.35 }}
      >
        {children}
      </m.main>
    </div>
  );
}
