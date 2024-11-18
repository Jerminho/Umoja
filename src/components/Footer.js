import React from "react";
import SocialMedia from "./SocialMedia";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-overlay"></div>
      <div className="relative container mx-auto px-4 sm:px-6 py-10">
        <div className="footer-content bg-opacity-60 p-4 rounded-lg max-w-lg mx-auto">
          <h1 className="text-2xl text-white text-center">Umoja</h1>
          <div className="mb-4">
            <SocialMedia />
          </div>

          <a href="https://www.pierrenh.com">
            <p className="text-white text-center">
              &copy; {new Date().getFullYear()} built by{" "}
              <span className="underline text-slate-700">NH</span> - All Rights
              Reserved
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
