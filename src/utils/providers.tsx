"use client";

import { LazyMotion, AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      let systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    onMediaChange();
    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const loadFeatures = () => import("./features").then((res) => res.default);
  return (
    <ThemeProvider attribute="class">
      <LazyMotion features={loadFeatures}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <ThemeWatcher />
          {children}
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  );
}
