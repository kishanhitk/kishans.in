import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { LazyMotion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://kishans.in${router.route}`;
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
          <Component {...pageProps} key={url} />
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  );
}
export default MyApp;
