import React, { useState } from "react";

const FAQComponent = ({ questions }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="faq-component max-w-4xl mx-auto px-4">
      <h1 className="text-center mb-6 text-xl ">Frequently Asked Questions</h1>
      <div className="faq-grid">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            {/* Question Header */}
            <div
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="text-md font-semibold text-gray-800">{item.question}</h2>
              <span
                className={`text-md text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
                  openQuestionIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Answer Section */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                openQuestionIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-1 rounded-lg shadow-md`}
            >
              <p className="text-gray-700 p-3">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;

