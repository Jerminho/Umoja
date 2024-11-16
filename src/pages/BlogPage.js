import React from "react";
import BackgroundImage from "../images/background.png";
const BlogPage = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <h1 className="text-secondary text-2xl">Blog Page Coming Soon!</h1>
    </div>
  );
};

export default BlogPage;
