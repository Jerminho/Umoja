import React from "react";
import BackgroundImage from "../images/background.png";

const HomePage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
    style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <h1 className="text-primary text-4xl font-bold">
        Welcome to the African Student Union!
      </h1>
    </div>
  );
};

export default HomePage;
