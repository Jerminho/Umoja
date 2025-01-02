// src/pages/BlogPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data from Strapi
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/blogs" // Change this URL to your Strapi API endpoint
        );
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <h2>{blog.attributes.title}</h2>
            <p>{blog.attributes.description}</p>
            <p>{blog.attributes.blogPostDate}</p>
            <img
              src={`http://localhost:1337${blog.attributes.image.data.attributes.url}`} // Adjust for your image URL structure
              alt={blog.attributes.title}
              width={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
