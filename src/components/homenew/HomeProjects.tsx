const HomeProjects = () => {
  return (
    <div className="my-10" id="projects">
      <div className="container">
        <h3 className="text-2xl font-semibold">Personal Projects</h3>
        <h4 className="text-xl text-black/70 mt-4">
          Some of my personal projects.
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
        <div className="rounded-2xl overflow-hidden p-10 bg-gray-100">
          <img src="/assets/myprs-banner.png" alt="" className="rounded-2xl" />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">MyPRs</h5>
            <p className="text-black/70 mt-1">
              One link to highlight your Open-Source Contributions.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden p-10 bg-gray-100">
          <img src="/assets/gita-gpt.png" alt="" className="rounded-xl" />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">Gita GPT</h5>
            <p className="text-black/70 mt-1">
              Find Solace in the wisdom of Shree Krishna 🦚
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden p-10 bg-gray-100">
          <img src="/assets/jumsbanner.webp" alt="" className="rounded-xl" />
          <div className="mt-4">
            <h5 className="text-xl font-semibold">JUMS Reboot</h5>
            <p className="text-black/70 mt-1">
              All in-one app for Jadavpur University Students.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden p-10 bg-gray-100">
          <img src="/assets/stroll.webp" alt="" className="rounded-xl" />

          <div className="mt-4">
            <h5 className="text-xl font-semibold">
              Stroll - The Dev Extension
            </h5>
            <p className="text-black/70 mt-1">
              A browser extension that automatically scrolls your browser to the
              most relevant answer while browsing Stack-Overflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
