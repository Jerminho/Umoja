import React from "react";
import WalkVideo from "../videos/joy.mp4";
import BackgroundImage from "../images/background.png";

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Video Banner Section */}
      <div className="banner-container relative h-[50vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          src={WalkVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-container">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white mb-2">
              Umoja Gent
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-300 text-center">
              Umoja Gent is an African student association in Ghent, celebrating
              and representing Africa's rich diversity. <br /> <br />
              <em>"Umoja"</em> means "Unity" in Swahili, which is exactly what
              we stand for !
              {/* —bringing students
              together and fostering a sense of belonging. We're all about UNITY
              and TOGETHERNESS! */}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content py-8 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
          This is where your main content goes. You can add sections, images, or
          any other information about your organization here.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
