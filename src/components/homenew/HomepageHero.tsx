import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const HomepageHero = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-gray-900">Hello, I'm Kishan.</h1>
      <h2 className="text-2xl text-gray-500 mt-2">
        I'm a software engineer and a writer.
      </h2>
      <p className="text-xl mt-5 text-gray-700">
        I write about software engineering, design, and the intersection of the
        two. I'm currently working on a book about the future of software
        engineering.
      </p>
      <Button className="mt-8 px-8 rounded-full py-5 font-mono" asChild>
        <a href="/about">
          More About Me
          <MoveRight strokeWidth={1.2} />
        </a>
      </Button>
    </div>
  );
};

export default HomepageHero;
