const HomeProjects = () => {
  return (
    <div className="my-10">
      <div className="container">
        <h3 className="text-3xl font-semibold">Personal Projects</h3>
        <h4 className="text-xl text-black/70 mt-4">
          Some of my personal projects.
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
        <div className="rounded-2xl overflow-hidden p-10 bg-gray-100">
          <img
            src="https://alexpate.com/_next/image?url=%2Fhystruct.png&w=640&q=90"
            alt=""
            className="rounded-2xl"
          />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">Hystruct</h5>
            <p className="text-black/70 mt-1">
              A tool for building better websites.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden p-10 bg-gray-100">
          <img
            src="https://alexpate.com/_next/image?url=%2Fhystruct.png&w=640&q=90"
            alt=""
            className="rounded-xl"
          />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">Hystruct</h5>
            <p className="text-black/70 mt-1">
              A tool for building better websites.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden p-10 bg-gray-100">
          <img
            src="https://alexpate.com/_next/image?url=%2Fhystruct.png&w=640&q=90"
            alt=""
            className="rounded-xl"
          />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">Hystruct</h5>
            <p className="text-black/70 mt-1">
              A tool for building better websites.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden p-10 bg-gray-100">
          <img
            src="https://alexpate.com/_next/image?url=%2Fhystruct.png&w=640&q=90"
            alt=""
            className="rounded-xl"
          />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">Hystruct</h5>
            <p className="text-black/70 mt-1">
              A tool for building better websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
