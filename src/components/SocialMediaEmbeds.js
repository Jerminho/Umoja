import React, { useEffect } from "react";

const SocialMediaEmbeds = () => {
  useEffect(() => {
    // Dynamically load Instagram script
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Dynamically load TikTok script
    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);
  }, []); // Run only once when the component mounts

  return (
    <div className="social-media-embeds-container">
      {/* Instagram Embed */}
      <div className="embed-item instagram-item">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DD70PIVOKqH/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>
      </div>

      {/* Second Container for TikTok and LinkedIn */}
      <div className="social-media-embeds-container">
        {/* TikTok Embed */}
        <blockquote
          className="tiktok-embed "
          cite="https://www.tiktok.com/@umojagent"
          data-unique-id="umojagent"
          data-embed-type="creator"
          style={{ maxWidth: "780px", minWidth: "288px" }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@umojagent?refer=creator_embed"
              rel="noreferrer"
            >
              @umojagent
            </a>
          </section>
        </blockquote>

        {/* LinkedIn Embed */}
        <div className="linkedin-embed-container">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7240408305620201473"
            height="600"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="LinkedIn Embedded Post"
            className="w-full max-w-md md:max-w-lg lg:max-w-2xl border rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaEmbeds;
