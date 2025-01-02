import React from "react";

// Importing SVG files as React components
import { ReactComponent as FacebookIcon } from "../media/facebook.svg";
import { ReactComponent as InstagramIcon } from "../media/instagram.svg";
import { ReactComponent as TwitterIcon } from "../media/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../media/linkedin.svg";
import { ReactComponent as TiktokIcon } from "../media/tiktok.svg";

const SocialMedia = () => {
  return (
    <div className="flex justify-center space-x-6 py-1">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/UmojaGent9200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="w-5 h-8 hover:scale-110 transition-transform duration-200 text-white" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/umojagent/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="w-5 h-8 hover:scale-110 transition-transform duration-200 text-white" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/gentumoja?s=21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="w-5 h-8 hover:scale-110 transition-transform duration-200 text-white" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/umoja-gent/?originalSubdomain=be"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="w-5 h-8 hover:scale-110 transition-transform duration-200 text-white" />
      </a>

      {/* Tiktok */}
      <a
        href="https://www.tiktok.com/@umojagent"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiktokIcon className="w-5 h-8 hover:scale-110 transition-transform duration-200 text-white" />
      </a>
    </div>
  );
};

export default SocialMedia;
