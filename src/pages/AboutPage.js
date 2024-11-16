import React from "react";
import BackgroundImage from "../images/background.png";

const AboutPage = () => {
  return (
    <div className=" min-h-screen p-6" 
    style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <h1 className="text-primary text-3xl font-bold mb-4">About Us</h1>
      <p>
        The African Student Union is dedicated to promoting African culture,
        unity, and academic excellence among students.
      </p>
    </div>
  );
};

export default AboutPage;
