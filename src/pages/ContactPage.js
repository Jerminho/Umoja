import React, { useState } from "react";
import BackgroundImage from "../images/background.png";
import orange from "../images/slide1.jpg";
import orangeDesktop from "../images/orange.jpg";

import FAQComponent from "../components/FAQComponent";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8661fa52-27ac-4ad7-9c82-459d860bdf53");
    formData.append("recipient", "umojagent@gmail.com");

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

  const questions = [
    { question: "What does Umoja mean?", answer: "Umoja means unity in Swahili." },
    { question: "What kind of events does Umoja organize?", answer: "No, our events and activities are not limited to people of African descent or nationality. We welcome all students and individuals interested in African culture and the topics we address." },
    { question: " Is Umoja exclusively for people of African descent?", answer: "Umoja organiseert zowel informatieve als recreatieve evenementen die gericht zijn op zowel vermaak als bewustwording." },
    { question: "How do I apply to become a board member at Umoja?", answer: "You can become a board member at Umoja by participating in the annual application process, which takes place every April. We opt for an application process to ensure that new board members have a positive impact on the community. As a board member, you also share responsibility for ensuring the safety and well-being of our members throughout the year. You also represent Umoja." },
    { question: "Does Umoja have a student initiation?", answer: "No, Umoja does not have a student initiation." },
    { question: "Is Umoja politically active?", answer: "Umoja is politically neutral." },
    { question: "Is Umoja only for UGent students?", answer: "No, every student is welcome." },
    { question: "How do I become a member of Umoja?", answer: "You can become a member of Umoja by purchasing a membership card through our website or at one of our events. We are happy to welcome you to our community, both online and in person!" },
    { question: "What values does Umoja represent?", answer: "Umoja stands for Unity, Visibility, and Togetherness. We unite the diverse African student community while celebrating individuality, increase the visibility of African students through cultural activities, and foster intercultural interactions to build a more inclusive student life in Ghent." },
    { question: "Is Umoja exclusively for students in Ghent?", answer: "No. Students from all regions are welcome." },
  ];

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Video Banner Section */}
      <div className="banner-container contact-banner relative h-[50vh] w-full overflow-hidden">
        <img
          src={orange} // Default mobile image
          className="absolute top-0 left-0 w-full h-full object-cover lg:hidden"
          alt="banner"
        />
        <img
          src={orangeDesktop} // Desktop image
          className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
          alt="banner"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-container">
            <a
              href="https://forms.gle/EWkzVwwgpuYDEgPk6"
              target="_blank"
              rel="noopener noreferrer"
              className="become-member-btn"
            >
              Become a member
            </a>
          </div>
        </div>
      </div>

      <div className="contactmain py-8 px-6">
        <div className="contactform max-w-4xl w-full bg-white bg-opacity-95 rounded-xl shadow-2xl md:backdrop-blur-md">
          {/* Header */}
          <h1 className="text-4xl font-bold text-[#f99c4a] text-center mb-6">
            Get in Touch
          </h1>
          <p className="calltoaction text-center text-sm text-gray-700 mb-8">
            We'd love to hear from you! Whether it's a question, collab request,
            feedback, or just a friendly hello, drop us a message.
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
      {/* FAQ Component */}
      <FAQComponent questions={questions} />
    </div>
  );
};

export default ContactPage;
