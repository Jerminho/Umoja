import React, { useState } from "react";
import GaelleEvent from "../images/gaelle_event.png";
import Ransford from "../images/ransford.png";
import Tyana from "../images/tyana.png";
import Dorcas from "../images/dorcas_comm.png";
import Bethi from "../images/bethi_treasurer.png";
import InesPanel from "../images/ines_panel.png";
import FrancescaPanel from "../images/francesca_panel.png";
import ChristellePanel from "../images/christelle_panel.png";
import Marie from "../images/marie_management.png";
import Teis from "../images/teis_management.png";
import HectorPanel from "../images/hector_panel.png";
import CharleneMarketing from "../images/charlene_marketing.png";
import ClaudiaMarketing from "../images/claudia_marketing.png";
import EuniqueMarketing from "../images/eunique_marketing.png";
import BackgroundImage from "../images/background.png";

const OurTeamComponent = () => {
  const [isEventTeamOpen, setIsEventTeamOpen] = useState(false);
  const [isManagementTeamOpen, setIsManagementTeamOpen] = useState(true);
  const [isPanelTeamOpen, setIsPanelTeamOpen] = useState(false);
  const [isMarketingTeamOpen, setIsMarketingTeamOpen] = useState(false);

  const toggleEventTeam = () => {
    setIsEventTeamOpen(!isEventTeamOpen);
  };

  const toggleManagementTeam = () => {
    setIsManagementTeamOpen(!isManagementTeamOpen);
  };

  const togglePanelTeam = () => {
    setIsPanelTeamOpen(!isPanelTeamOpen);
  };

  const toggleMarketingTeam = () => {
    setIsMarketingTeamOpen(!isMarketingTeamOpen);
  };

  return (
    <div
      className="team_component bg-background min-h-screen p-6"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1 className="text-[#f99c4a] text-4xl mb-6 text-center">Meet Our Team</h1>

      {/* Management Team Section */}
      <div className="mb-8">
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
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isManagementTeamOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <img
              loading="lazy"
              src={Marie}
              alt="Marie Management Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={Teis}
              alt="Teis Management Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={Dorcas}
              alt="Dorcas Management Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={Bethi}
              alt="Bethi Management Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
          </div>
        </div>
      </div>

      {/* Panel Team Section */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
          onClick={togglePanelTeam}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Panel Team</h2>
          <span
            className={`text-3xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
              isPanelTeamOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isPanelTeamOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <img
              loading="lazy"
              src={InesPanel}
              alt="Ines Panel Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={FrancescaPanel}
              alt="Francesca Panel Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={ChristellePanel}
              alt="Christelle Panel Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={HectorPanel}
              alt="Hector Panel Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
          </div>
        </div>
      </div>

      {/* Marketing Team Section */}
      <div className="mb-8">
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
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isMarketingTeamOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              loading="lazy"
              src={CharleneMarketing}
              alt="Charlene Marketing Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={ClaudiaMarketing}
              alt="Claudia Marketing Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={EuniqueMarketing}
              alt="Eunique Marketing Team"
              className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
          </div>
        </div>
      </div>

      {/* Event Team Section */}
      <div className="mb-8">
        <div
          className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
          onClick={toggleEventTeam}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Event Team</h2>
          <span
            className={`text-3xl text-[#f99c4a] transform transition-transform duration-300 ease-in-out ${
              isEventTeamOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isEventTeamOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-[#f99c4a] bg-opacity-50 mt-4 p-4 rounded-lg shadow-md`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              loading="lazy"
              src={GaelleEvent}
              alt="Gaelle Event Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              loading="lazy"
              src={Ransford}
              alt="Ransford Event Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
            <img
              src={Tyana}
              alt="Tyana Event Team"
              className="w-full h-auto rounded-md shadow-md hover:scale-105 transition transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
