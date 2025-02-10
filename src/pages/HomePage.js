import React, { useState } from "react";
import WalkVideo from "../videos/joy.mp4";
import IntroVideo from "../videos/Umoja.mp4";
import { ReactComponent as FacebookIcon } from "../media/facebook.svg";
import { ReactComponent as InstagramIcon } from "../media/instagram.svg";
import { ReactComponent as TwitterIcon } from "../media/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../media/linkedin.svg";
import { ReactComponent as TiktokIcon } from "../media/tiktok.svg";
import BackgroundImage from "../images/background.png";
import GaelleEvent from "../images/gaelle_event.png";
import Ransford from "../images/ransford.png";
import Tyana from "../images/tyana.png";
import Dorcas from "../images/dorcas_comm.png";
import Bethi from "../images/bethi_treasurer.png";
import Marie from "../images/marie_management.png";
import Teis from "../images/teis_management.png";
import CharleneMarketing from "../images/charlene_marketing.png";
import ClaudiaMarketing from "../images/claudia_marketing.png";
import EuniqueMarketing from "../images/eunique_marketing.png";

const HomePage = () => {
  const [isEventTeamOpen, setIsEventTeamOpen] = useState(true);
  const [isManagementTeamOpen, setIsManagementTeamOpen] = useState(true);
  const [isPresidentTeamOpen, setIsPresidentTeamOpen] = useState(true);
  const [isMarketingTeamOpen, setIsMarketingTeamOpen] = useState(true);

  const toggleEventTeam = () => {
    setIsEventTeamOpen(!isEventTeamOpen);
  };

  const toggleManagementTeam = () => {
    setIsManagementTeamOpen(!isManagementTeamOpen);
  };

  const togglePresidentTeam = () => {
    setIsPresidentTeamOpen(!isPresidentTeamOpen);
  };

  const toggleMarketingTeam = () => {
    setIsMarketingTeamOpen(!isMarketingTeamOpen);
  };

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Video Banner Section */}
      <div className="nobanner-container relative h-[50vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          src={WalkVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture="true"
          preload="true"
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-container">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white mb-2">
              Umoja Gent
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-300 text-center">
              Umoja Gent is an African student association that celebrates
              African diversity and fosters unity among students.
              <br /> <br />
              By offering culturally enriching activities focused on African
              themes, Umoja ensures every student feels represented. Our core
              values are visibility and togetherness. <br /> <br />
              <em>"Umoja"</em> means "Unity" in Swahili, which is exactly what
              we stand for !
            </p>
          </div>
        </div>
      </div>
      <div className=" intro__vid py-8 px-4 bg-black">
        {/* Introduction video*/}
        <video
          src={IntroVideo}
          autoPlay
          muted
          controls
          loop
          playsInline
          disablePictureInPicture="true"
          preload="true"
          className=" top-0 left-0 w-full h-full object-cover"
        ></video>
      </div>

      {/* Social Media Banner */}
      <div className="bannerism">
        <div className="bannerism-content">
          <div className="bannerism-buttons">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Umoja Ghent is committed to creating a more inclusive and diverse
              student experience. We strive to transform the current,
              homogeneous student landscape into a place where everyone feels at
              home—regardless of ethnic, cultural, or religious background.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Our mission? To foster a higher education environment built on
              respect, recognition, and connection. We believe that cultural
              diversity should not only be present but also celebrated within
              student life.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Umoja Ghent serves as a bridge between the African student
              community and the wider student population in Ghent. Through
              high-quality, inspiring, and engaging cultural events, we create
              opportunities for meaningful exchanges and connections. Together,
              we make student life in Ghent richer, more vibrant, and truly
              inclusive.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className=" py-8 px-4">
        <hr className="mb-8 w-full  " />

        <div className="home_team--section">
          <h1 className="text-[#f99c4a] text-4xl  mb-6 text-center">
            Meet Our Team
          </h1>

          {/* Management Team Section */}
          <div className="mb-8">
            {/* Dropdown Header */}
            <div
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={togglePresidentTeam}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Presidents
              </h2>
              <span
                className={`text-3xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
                  isPresidentTeamOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Background Container and Team Members (Animated with smooth transition) */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isPresidentTeamOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
            >
              {/* Team Member Images Container */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  ${
                  isPresidentTeamOpen ? "team-members-container" : ""
                }`}
              >
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center mb-3">
                  <img
                    loading="lazy"
                    src={Marie}
                    alt="Marie Presidents Team"
                    className="w-full max-w-sm h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center text-center mb-3">
                  <img
                    loading="lazy"
                    src={Teis}
                    alt="Teis Presidents Team"
                    className="w-full max-w-sm h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Management Team Section */}
          <div className="mb-8">
            {/* Dropdown Header */}
            <div
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={toggleManagementTeam}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Management Team
              </h2>
              <span
                className={`text-3xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
                  isManagementTeamOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Background Container and Team Members (Animated with smooth transition) */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isManagementTeamOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
            >
              {/* Team Member Images Container */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  ${
                  isManagementTeamOpen ? "team-members-container" : ""
                }`}
              >
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center mb-3">
                  <img
                    loading="lazy"
                    src={Dorcas}
                    alt="Dorcas Management Team"
                    className="w-full max-w-sm h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center text-center mb-3">
                  <img
                    loading="lazy"
                    src={Bethi}
                    alt="Bethi Management Team"
                    className="w-full max-w-sm h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Team Section */}
          <div className="mb-8">
            {/* Dropdown Header */}
            <div
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={toggleMarketingTeam}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Marketing Team
              </h2>
              <span
                className={`text-3xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
                  isMarketingTeamOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Background Container and Team Members (Animated with smooth transition) */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isMarketingTeamOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
            >
              {/* Team Member Images Container */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
                  isMarketingTeamOpen ? "team-members-container" : ""
                }`}
              >
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    loading="lazy"
                    src={CharleneMarketing}
                    alt="Charlene Marketing Team"
                    className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    loading="lazy"
                    src={ClaudiaMarketing}
                    alt="Claudia Marketing Team"
                    className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>

                {/* Member 3 */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    loading="lazy"
                    src={EuniqueMarketing}
                    alt="Eunique Marketing Team"
                    className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event Team Section */}
          <div className="mb-8">
            {/* Dropdown Header */}
            <div
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={toggleEventTeam}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Event Team
              </h2>
              <span
                className={`text-3xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
                  isEventTeamOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Background Container and Team Members (Animated with smooth transition) */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isEventTeamOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
            >
              {/* Team Member Images Container */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
                  isEventTeamOpen ? "team-members-container" : ""
                }`}
              >
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center">
                  <img
                    loading="lazy"
                    src={GaelleEvent}
                    alt="Gaelle Event Team"
                    className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center text-center">
                  <img
                    loading="lazy"
                    src={Ransford}
                    alt="Ransford Event Team"
                    className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>

                {/* Member 3 */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={Tyana}
                    loading="lazy"
                    alt="Tyana Event Team"
                    className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
