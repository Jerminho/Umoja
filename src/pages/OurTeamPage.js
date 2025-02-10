import React from "react";
import BackgroundImage from "../images/background.png";

const teamRoles = [
  {
    title: "🤝🏾 President",
    description:
      "Leads our team with passion and determination. As president, keeps an overview, represents Umoja to the outside world and makes sure we achieve our goals together. 🌍💡",
  },
  {
    title: "💼 Vice President",
    description:
      "The right hand of the president, ready to support where needed. He provides internal coordination and helps strengthen cohesion within the team. Together they build a strong, close-knit community!",
  },
  {
    title: "🎯 Marketing Team Leader",
    description:
      "Ensures our team is structured and efficient. With their vision and leadership, the marketing leader brings together the strategies to powerfully bring Umoja Ghent to the outside world. 🧠💪🏾",
  },
  {
    title: "🌐 Digital Specialist & Social Media Manager",
    description:
      "Manages our digital platforms with a masterful touch. She makes sure we have an online presence, with engaging and impactful content that tells our story. 📱",
  },
  {
    title: "🎥 Content Specialist & Photo-videographer",
    description:
      "With a creative eye, creates visually engaging content. Photos or videos, knows exactly how to capture the essence of Umoja Gent. ✨",
  },
  {
    title: "📈 Treasurer",
    description:
      "Manages our finances with care and accuracy. Oversees the budget, ensures transparent spending, and makes sure we use our resources responsibly so we can achieve our projects.",
  },
  {
    title: "📢 Communications Manager",
    description:
      "Ensures that our message comes out clearly and powerfully. Coordinates all internal and external communications, ensuring that our values and activities are clearly communicated to our members and the wider public.",
  },
  {
    title: "🎭 Event Team Leader",
    description:
      "Leads the event team with passion and precision. Makes sure everything runs like clockwork, from the initial planning to the final details on the day itself. Thanks to them, our events remain structured and memorable!",
  },

  {
    title: "🌟 Event Coordinator ",
    description:
      "brings organizational talents to ensure the logistics and coordination of our events run smoothly. With an eye for detail, they ensure that every aspect is perfectly coordinated.",
  },
];

const OurTeamPage = () => {
  return (
    <div
      className="our-team-page bg-background min-h-screen p-6"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="text-center mb-8">
        <h1 className="text-[#f99c4a] text-4xl font-bold">Our Team</h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto mt-4">
          The Umoja team is driven by passion, teamwork, and dedication. Each
          member plays a unique and essential role in making our vision a
          reality.
        </p>
        <blockquote className="mt-4 text-gray-600 italic font-semibold">
          "Alone we can do so little; together we can do so much." - Helen Keller
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamRoles.map((role, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-[#f99c4a] mb-2">
              {role.title}
            </h2>
            <p className="text-gray-700">{role.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm font-semibold text-gray-800 mb-4">
          Have a question? We’d love to hear from you!
        </p>
        <a
          href="/contact"
          className="inline-block text-white bg-gradient-to-r from-[#f99c4a] to-[#f88f5f] px-8 py-4 rounded-full text-lg font-semibold shadow-md transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
        >
          Contact Our Team
        </a>
      </div>
    </div>
  );
};

export default OurTeamPage;
