import Project from "../Project";

export default function Portfolio() {
  const projects = [
    {
      title: "G.I.T.",
      img: "assets/git.png",
      liveLink: "http://georgiait.net/",
      repoLink: "https://github.com/xBenCookx/gitsite",
    },
    {
      title: "ColorCoder",
      img: "assets/color.png",
      liveLink: "https://colorcoder.onrender.com/",
      repoLink: "https://github.com/xBenCookx/colorcoder",
    },
    {
      title: "PhotoTrace",
      img: "assets/phototrace.png",
      liveLink: "https://photo-trace-client.onrender.com/",
      repoLink: "https://github.com/bryanesslinger/Photo_Trace_Client",
    },
  ];

  return (
    <section className="p-8 md:p-16 bg-gradient-to-br from-white to-gray-50">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-800 mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full flex flex-col justify-between"
          >
            <Project
              title={project.title}
              img={project.img}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
