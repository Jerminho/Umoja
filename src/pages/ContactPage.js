import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-yellow-300 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-primary text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Send us your questions, comments, or just say hello.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message here"
              rows="5"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-secondary transition transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
