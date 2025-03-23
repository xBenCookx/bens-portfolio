export default function Project({ title, img, liveLink, repoLink }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden mx-4 md:mx-0 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <img
          src={img}
          alt={title}
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="p-6 text-gray-800 text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-col md:flex-row justify-center md:justify-between mt-4 space-y-2 md:space-y-0">
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              GitHub Repo
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  