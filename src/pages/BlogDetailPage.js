import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams(); // Extract the blog ID from the URL params
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/study-blogs/${id}?populate=Image`)
      .then((response) => {
        setBlog(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
        setError("Failed to load blog details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

  const { Title, Description, Author, BlogPostDate, LongText, Image } =
    blog.attributes || {};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {Image && Image.data && (
        <div className="mb-6 text-center">
          <img
            src={`http://localhost:1337${Image.data.attributes.url}`}
            alt={Image.data.attributes.alternativeText || Title}
            className="w-4/5 h-80 object-cover mx-auto rounded-md"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4 text-center">{Title}</h1>
      <p className="text-gray-600 mb-4 text-center">{Description}</p>
      <p className="text-gray-500 text-sm mb-6 text-center">
        Author: {Author} | Posted on:{" "}
        {new Date(BlogPostDate).toLocaleDateString()}
      </p>
      <div className="prose max-w-none">{LongText}</div>
    </div>
  );
};

export default BlogDetail;
