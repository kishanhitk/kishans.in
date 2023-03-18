import type { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-xl font-bold">{children}</h1>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    ...components,
  };
}
