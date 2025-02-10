import React, { useState } from "react";

const FAQComponent = ({ questions }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="faq-component max-w-xl mx-4 justify-self-center">
        <h1 className="justify-self-center mb-4"> Frequently asked questions</h1>
      {questions.map((item, index) => (
        <div key={index} className="mb-3">
          {/* Question Header */}
          <div
            className="flex justify-between items-center bg-white shadow-md p-1 rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => toggleQuestion(index)}
          >
            <h2 className="text-l font-semibold text-gray-800">
              {item.question}
            </h2>
            <span
              className={`text-xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
                openQuestionIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>

          {/* Answer Section */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              openQuestionIndex === index
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden bg-[#f99c4a] bg-opacity-50 m-1  rounded-lg shadow-md`}
          >
            <p className="text-gray-700 p-3">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
