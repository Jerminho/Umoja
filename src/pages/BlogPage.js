import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPeek from "../components/BlogPeek";
import BackgroundImage from "../images/background.png";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://umojastrapi-3ba3915823f6.herokuapp.com/api/study-blogs?populate=Image"
      )
      .then((response) => {
        setBlogs(response.data.data.reverse()); // Reverse the array to display latest blog first
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs:", error);
      });
  }, []);

  return (
    <div>
      <div className="blog-list-container">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogPeek key={blog.id} blog={blog} />)
        ) : (
          <p>Loading blogs...</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
