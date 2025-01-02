import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure you have axios installed

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the blogs from Strapi API and include the image field (populate it)
    axios
      .get("http://localhost:1337/api/study-blogs?populate=Image") // Adding ?populate=Image to include the media
      .then((response) => {
        console.log("Fetched blogs:", response.data.data); // Log the response to inspect its structure
        setBlogs(response.data.data); // Set blogs data
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs:", error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-post">
              <h2>{blog.Title}</h2> {/* Display the blog title */}
              <p>{blog.Description}</p>
              <p>Author: {blog.Author}</p>
              <p>
                Posted on: {new Date(blog.BlogPostDate).toLocaleDateString()}
              </p>
              {/* Display the image */}
              {blog.Image && blog.Image.url && (
                <img
                  src={`http://localhost:1337${blog.Image.url}`} // Full-size image URL
                  alt={blog.Image.alternativeText || blog.Title} // Use alt text or fallback to title
                  width="100%" // Adjust width as needed
                />
              )}
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
