// Workaround for rendering not-found page when multiple using route groups. Ref: https://github.com/vercel/next.js/discussions/50034

import { notFound } from "next/navigation";

export default function NotFoundDummy() {
  notFound();
}
