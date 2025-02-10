import React, { useState, useRef, useEffect } from "react";

const BlogPeek = ({ blog }) => {
  const [showLongText, setShowLongText] = useState(false);
  const [contentHeight, setContentHeight] = useState(0); // Store dynamic height
  const contentRef = useRef(null); // Reference to the long text content

  // Update height dynamically when text is toggled
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [showLongText]);

  const toggleLongText = () => {
    setShowLongText(!showLongText);
  };

  return (
    <div className="blog-container bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-4 md:mx-6 lg:mx-auto my-4 max-w-2xl">
      {blog.Image && blog.Image.url && (
        <div className="blog-image-container">
          <img
            src={`https://umojastrapi-3ba3915823f6.herokuapp.com${blog.Image.url}`}
            alt={blog.Image.alternativeText || blog.Title}
            className="blog-image"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{blog.Title}</h2>
        <p className="text-gray-600 text-base mb-4">{blog.Description}</p>
        <p className="text-gray-500 text-sm mb-4">
          Author: {blog.Author} | Posted on:{" "}
          {new Date(blog.BlogPostDate).toLocaleDateString()}
        </p>

        {/* Smooth Transition Section */}
        <div
          ref={contentRef}
          className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
            showLongText ? "opacity-100" : "opacity-0"
          }`}
          style={{
            maxHeight: showLongText ? `${contentHeight}px` : "0px",
          }}
        >
          <p className="text-gray-600 text-base mb-4">{blog.LongText}</p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleLongText}
          className="mt-4 bg-orange-500 text-white text-base px-5 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
        >
          {showLongText ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default BlogPeek;
