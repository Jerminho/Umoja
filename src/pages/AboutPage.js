import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import BackgroundImage from "../images/background.png";
import "leaflet/dist/leaflet.css";

const AboutPage = () => {
  const location = [51.031501, 3.7013]; // Coordinates for the address

  // The Google Maps URL with the address
  const googleMapsUrl =
    "https://www.google.com/maps?q=Valentin+Vaerwyckweg+1,+9000+Gent";

  return (
    <div
      className="bg-background min-h-screen p-6"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Title Section */}
      <div className="team_component">
        <h1 className="text-[#f99c4a] text-4xl mb-6 text-center">About Us</h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto bg-white bg-opacity-95 rounded-xl shadow-2xl p-8 md:backdrop-blur-md mt-8 mb-8">
        {/* Our Mission */}
        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#f99c4a] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Umoja Gent is an African student association in Ghent that seeks to
            celebrate and represent Africa's rich diversity. Our mission is to
            create unity among students by fostering a sense of belonging and
            visibility, especially for students with African roots. We believe
            that diversity is an enrichment that benefits everyone.
          </p>
        </section>

        {/* Our Vision */}
        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#f99c4a] mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Umoja Gent aspires to bring African diversity to the forefront in
            Ghent, creating a bridge between African students and the broader
            student community. Through our efforts, we aim to inform, inspire,
            and encourage conversations about culture, inclusivity, and social
            equity.
          </p>
        </section>

        {/* Our Values */}
        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#f99c4a] mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="valuecard p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#f99c4a]">Unity</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe every student should feel represented and connected.
                Umoja stands for bringing students together and fostering a
                sense of togetherness.
              </p>
            </div>
            <div className="valuecard p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#f99c4a]">
                Diversity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We are committed to showcasing African diversity in Ghent and
                promoting the enrichment that comes with multicultural
                representation.
              </p>
            </div>
            <div className="valuecard p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#f99c4a]">
                Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Through our activities, we aim to inform and raise awareness
                about social inequalities while celebrating and honoring African
                culture.
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
                Valentin Vaerwyckweg 1, 9000 Gent
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
