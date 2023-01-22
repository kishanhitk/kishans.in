"use client";

import { LazyMotion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const loadFeatures = () =>
    import("../utils/features").then((res) => res.default);
  return (
    <ThemeProvider attribute="class">
      <LazyMotion features={loadFeatures}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  );
}
