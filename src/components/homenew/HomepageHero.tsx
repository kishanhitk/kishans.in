import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const HomepageHero = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-gray-900">Hello, I'm Kishan.</h1>
      <h2 className="text-2xl text-gray-500 mt-2">
        A product engineer from India.
      </h2>
      <p className="text-xl mt-5 text-gray-700">
        A developer with a product mindset, keen attention to detail, and a
        passion for web performance optimization. I build efficient, scalable
        products that enhance user experience across modern web applications.
        Currently working at Quinence.
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
