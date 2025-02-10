//import React from "react";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import BackgroundImage from "../images/background.png";
import orange from "../images/Umojacrew.jpeg";

import "leaflet/dist/leaflet.css";
const location = [50.959609, 3.595879]; // Coordinates for the address

// The Google Maps URL with the address
const googleMapsUrl =
  "https://www.google.com/maps/dir//Hoveniersberg+24,+9000+Gent/@51.0445247,3.6455628,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c371517dd893d3:0x86c76df4a3931dac!2m2!1d3.728221!2d51.0445463?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D";

const AboutPage = () => {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Video Banner Section */}
      <div className="banner-container relative h-[30rem] w-full overflow-hidden">
        {/* Video Background */}
        <img
          src={orange}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="orange"
        ></img>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-container">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white mb-2">
              About us
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-300 text-center">
              Umoja started as Project X, without a name, when{" "}
              <em>Marie Laure Mulayi </em> noticed that African students in
              Ghent lacked a place to come together. She reached out to
              like-minded people
              <br /> <br />
              The aim was to build an association that goes beyond simple social
              gatherings. It's about the assertion of our social identity at the
              university level, combating injustice, and challenging the
              structures that contribute to the marginalization of ethnic
              minorities. <br /> <br />
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content py-8 px-6">
        {/* Main Content Section */}
        <div className="max-w-5xl mx-auto bg-white bg-opacity-95 rounded-xl shadow-2xl p-8 md:backdrop-blur-md mt-8 mb-8">
          {/* Our Mission */}
          <section className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#f99c4a] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Umoja Ghent's mission is to represent and promote African
              diversity in Ghent through cultural activities that highlight
              African heritage and social issues. We aim to create visibility
              for African students, fostering a sense of unity and belonging
              within the student community, while promoting intercultural
              togetherness through engagement and collaboration.
            </p>
          </section>

          {/* Our Vision */}
          <section className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#f99c4a] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Umoja Gent aspires to bring African diversity to the forefront in
              Ghent, creating a bridge between African students and the broader
              student community. Through our efforts, we strive to create an
              inclusive environment of mutual respect, visibility, and
              togetherness, empowering all students to thrive and connect across
              cultural boundaries.
            </p>
          </section>

          {/* Our Values */}
          <section className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#f99c4a] mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="valuecard p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#f99c4a]">Unity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in uniting the diverse African student community in
                  Ghent, while respecting and celebrating the individuality of
                  each culture. Umoja strives to foster a sense of belonging and
                  togetherness among all students, promoting intercultural
                  exchange and understanding.
                </p>
              </div>
              <div className="valuecard p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#f99c4a]">
                  Visibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We aim to increase the visibility of African students in Ghent
                  by organizing cultural activities focused on African topics.
                  Our goal is to create a platform where African cultures are
                  highlighted, allowing students to feel seen and heard within
                  the wider student community.
                </p>
              </div>
              <div className="valuecard p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#f99c4a]">
                  Togetherness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We work towards fostering intercultural interactions and
                  building connections between students of different
                  backgrounds. Through collaboration with other cultural
                  organizations and community leaders, Umoja Ghent is dedicated
                  to creating a more inclusive and connected student life in
                  Ghent.
                </p>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="my-8 relative z-0">
            <h2 className="text-2xl font-bold text-[#f99c4a] mb-4">Find Us</h2>
            <MapContainer
              center={location}
              zoom={14}
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                zIndex: 1,
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={location}
                icon={icon({
                  iconUrl:
                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                })}
              >
                <Popup>Your Union's location!</Popup>
              </Marker>
            </MapContainer>

            {/* Address Section */}
            <div className="mt-4 text-center">
              <p className="text-gray-700">
                Find us at:{" "}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f99c4a] hover:underline"
                >
                  De Therminal, 9000 Gent
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
