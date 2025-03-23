export default function About() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 md:p-20 text-center md:text-left">
        {/* Image Container */}
        <div className="flex justify-center">
          <img
            src="assets/me.jpeg"
            alt="Ben"
            className="max-w-full h-auto rounded-full object-cover"
          />
        </div>
  
        {/* Text Content */}
        <div className="text-base md:text-lg">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">ABOUT</h1>
          <p className="mb-4">
            Hi! I'm Ben, a driven and results-oriented professional enthusiastic about transitioning into the dynamic field of software development.
          </p>
          <p className="mb-4">
            With a background in special testing, agricultural chemical sales, and internet technology, I have developed strong analytical problem-solving skills, technical expertise, and a customer-focused mindset—key attributes in software development.
          </p>
          <p className="mb-4">
            My experience in special testing sharpened my attention to detail and data analysis, crucial for debugging and writing efficient code. In agricultural chemical sales, I honed my ability to understand client needs and communicate complex solutions effectively, much like collaborating with stakeholders in software projects.
          </p>
          <p>
            As an internet technician, I developed troubleshooting skills and adaptability, essential for solving technical challenges in dynamic development environments. This combination of skills positions me well for a successful transition into software development.
          </p>
        </div>
      </section>
    );
  }
  