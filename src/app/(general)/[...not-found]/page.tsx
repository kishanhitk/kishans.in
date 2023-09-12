// Workaround for rendering not-found page when multiple using route groups. Ref: https://github.com/vercel/next.js/discussions/50034

export const runtime = "edge";
import { notFound } from "next/navigation";
export default function NotFoundDummy() {
  notFound();
}
