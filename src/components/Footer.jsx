import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white p-6 shadow-lg rounded-t-2xl">
      <div className="container mx-auto text-center text-gray-700">
        <p className="text-lg font-semibold">Ben Cook</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/xbencookx"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" className="text-gray-700 hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/ben-cook-03020b313"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-gray-700 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}
