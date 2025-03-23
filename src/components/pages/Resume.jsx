export default function Resume() {
    return (
      <section className="text-center m-6 md:m-12 p-10 md:p-20 bg-white shadow-lg rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Resume</h2>
        
        <a
          href="assets/resume.pdf"
          download
          className="bg-blue-600 text-white text-lg md:text-xl px-10 py-3 md:px-24 rounded-xl shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
        >
          Download Resume
        </a>
  
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-10">Skills</h3>
  
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-lg text-gray-700 max-w-lg mx-auto">
          <li className="bg-gray-100 p-3 rounded-lg shadow-sm">JavaScript</li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-sm">React</li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-sm">Node.js</li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-sm">HTML & CSS</li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-sm">Python</li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-sm">AWS</li>
        </ul>
      </section>
    );
  }
  