import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 mb-4">Ben Cook</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/xbencookx"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/ben-cook-03020b313"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
