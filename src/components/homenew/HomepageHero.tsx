import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const HomepageHero = () => {
  return (
    <div className="container">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Hello, I'm Kishan.
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-500 mt-2">
        A product engineer from India.
      </h2>
      <p className="text-lg sm:text-xl mt-4 sm:mt-5 text-gray-700">
        A developer with a product mindset, keen attention to detail, and a
        passion for web performance optimization. I build efficient, scalable
        products that enhance user experience across modern web applications.
        Currently working at Quinence.
      </p>
      <Button
        className="mt-6 sm:mt-8 px-6 sm:px-8 rounded-full py-4 sm:py-5 font-mono text-sm sm:text-base"
        asChild
      >
        <a href="/about">
          More About Me
          <MoveRight strokeWidth={1.2} className="ml-2" />
        </a>
      </Button>
    </div>
  );
};

export default HomepageHero;
