import React from "react";
import SocialMedia from "./SocialMedia"; 
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-overlay"></div> {/* Optional overlay */}
      
      {/* Footer content container */}
      <div className="relative container mx-auto px-4 sm:px-6 py-10">
        {/* Content with background */}
        <div className="footer-content bg-black bg-opacity-60 p-4 rounded-lg max-w-lg mx-auto">
        
          <h1 className="text-2xl text-white text-center">Umoja</h1>
          {/* Social Media Links Placeholder */}
          <div className="mb-4">
            <SocialMedia />
          </div>
          <p className="text-white text-center">
            &copy; {new Date().getFullYear()} built by NH - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;