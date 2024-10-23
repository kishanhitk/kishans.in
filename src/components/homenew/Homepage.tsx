import React from "react";
import HomepageHero from "./HomepageHero";
import { Separator } from "../ui/separator";
import HomeProjects from "./HomeProjects";

const Homepage = () => {
  return (
    <div>
      <HomepageHero />
      <Separator className="my-12 container" />
      <HomeProjects />
    </div>
  );
};

export default Homepage;
