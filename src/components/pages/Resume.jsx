export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Resume</h2>
        <a
          href="assets/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["JavaScript", "React", "Node.js", "HTML & CSS", "Python", "AWS"].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 p-4 rounded-lg text-center text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  