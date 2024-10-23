import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">Hello, I'm Kishan.</h1>
      <h2 className="text-2xl text-black/70 mt-1">
        I'm a software engineer and a writer.
      </h2>
      <p className="text-xl mt-5 text-black/80">
        I write about software engineering, design, and the intersection of the
        two. I'm currently working on a book about the future of software
        engineering.
      </p>
      <a
        href="/about"
        className="bg-black rounded-full text-white px-8 py-2 mt-8 inline-block"
      >
        More about me
        <FaArrowRight className="inline-block ml-3" />
      </a>
    </div>
  );
};

export default Homepage;
