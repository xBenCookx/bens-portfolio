import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return;
    }

    setError("");
    window.location.href = `mailto:bencook1023@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)} (Contact: ${encodeURIComponent(email)})`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-lg mx-auto my-20 p-8 bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-6">
        Get in Touch
      </h2>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
