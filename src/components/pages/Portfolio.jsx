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
      liveLink: "",
      repoLink: "https://github.com/xBenCookx/colorcoder",
    },
    {
      title: "CoolCademy",
      img: "assets/cool.png",
      liveLink: "",
      repoLink: "https://github.com/MsPickles1014/CoolCademy",
    },
    {
      title: "PhotoTrace",
      img: "assets/phototrace.png",
      liveLink: "https://photo-trace-client.onrender.com/",
      repoLink: "https://github.com/bryanesslinger/Photo_Trace_Client",
    },
  ];

  return (
    <section className="p-8 md:p-12 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full h-80 flex flex-col justify-between bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105"
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
