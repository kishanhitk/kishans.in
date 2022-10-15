import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { MainLayout } from "../layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Kishan Kumar - Full Stack Developer"
        description="Blogs and Projects by Kishan"
        canonical="https://kishans.in"
        openGraph={{
          url: "https://kishans.in",
          title: "Kishan Kumar - Full Stack Developer",
          description: "Blogs and Projects by Kishan",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.webp",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <h1 className="text-blue-500">Hello</h1>
    </MainLayout>
  );
};

export default Home;
