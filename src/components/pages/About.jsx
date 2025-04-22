export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image Container */}
      <div className="flex justify-center">
        <div className="relative">
          <img
            src="assets/me.jpg"
            alt="Ben"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg"
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6 text-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">About Me</h1>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed">
          <p>
            Hi! I'm Ben, a driven and results-oriented professional enthusiastic about transitioning into the dynamic field of software development.
          </p>
          <p>
            With a background in special testing, agricultural chemical sales, and internet technology, I have developed strong analytical problem-solving skills, technical expertise, and a customer-focused mindset—key attributes in software development.
          </p>
          <p>
            My experience in special testing sharpened my attention to detail and data analysis, crucial for debugging and writing efficient code. In agricultural chemical sales, I honed my ability to understand client needs and communicate complex solutions effectively, much like collaborating with stakeholders in software projects.
          </p>
          <p>
            As an internet technician, I developed troubleshooting skills and adaptability, essential for solving technical challenges in dynamic development environments. This combination of skills positions me well for a successful transition into software development.
          </p>
        </div>
      </div>
    </section>
  );
}
  