import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPeek from "../components/BlogPeek";
import BackgroundImage from "../images/background.png";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/study-blogs?populate=Image")
      .then((response) => {
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs:", error);
      });
  }, []);

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <h1>Blog Page</h1>
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogPeek key={blog.id} blog={blog} />)
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
