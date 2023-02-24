import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import PostCard from "~/components/PostCard";
import { SocialLinks } from "~/components/SocialLinks";
import type { HashnodePost } from "~/types/hashnode";
import { getAllPostByUsername } from "~/utils/hashnode";

export async function loader() {
  const posts = await getAllPostByUsername("kishanhitk");
  return json(
    { posts }
    // {
    //   headers: {
    //     "Cache-Control":
    //       "max-age=60, s-max-age=1200, stale-while-revalidate=180",
    //   },
    // }
  );
}
// export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
//   return {
//     "Cache-Control": loaderHeaders.get("Cache-Control"),
//   };
// }

const Index = () => {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col items-start gap-8">
      <h1 className="text-4xl font-bold dark:text-white md:text-5xl">
        Hi, I&apos;m Kishan
      </h1>
      <p className="text-md">
        I&apos;m a self-taught developer from India. I love building cool stuff
        for web and mobile using
        <strong>: Javascript/Typescript</strong>, <strong> ReactJS</strong>,{" "}
        <strong> NodeJS</strong>, <strong> Flutter</strong>, and
        <strong> AWS</strong>.
      </p>
      <SocialLinks />
      <h2 className="text-3xl font-bold">Recent Posts</h2>
      {posts?.map((post: HashnodePost) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default Index;
