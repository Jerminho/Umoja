import React, { useState } from "react";
import BackgroundImage from "../images/background.png";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8661fa52-27ac-4ad7-9c82-459d860bdf53");
    formData.append("recipient", "jeremie.wy@outlook.fr");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully! Thank you for reaching out.");
      event.target.reset();
    } else {
      console.error("Submission error:", data);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="contactform max-w-4xl w-full bg-white bg-opacity-95 rounded-xl shadow-2xl p-8 md:backdrop-blur-md">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#f99c4a] text-center mb-6">
          Get in Touch
        </h1>
        <p className="calltoaction text-center text-sm text-gray-700 mb-8">
          We'd love to hear from you! Whether it's a question, feedback, or just
          a friendly hello, drop us a message.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-4 rounded-lg border border-[#f99c4a] focus:outline-none focus:ring-2 focus:ring-[#f99c4a] transition text-gray-800 shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-4 rounded-lg border border-[#f99c4a] focus:outline-none focus:ring-2 focus:ring-[#f99c4a] transition text-gray-800 shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows="5"
              required
              className="w-full p-4 rounded-lg border border-[#f99c4a] focus:outline-none focus:ring-2 focus:ring-[#f99c4a] transition text-gray-800 shadow-sm"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="calltoaction bg-[#f99c4a] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#e8863c] transition transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Result Message */}
        {result && (
          <p className="text-center text-sm text-gray-700 mt-4">{result}</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
