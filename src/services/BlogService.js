import axios from "axios";

const BASE_URL = "http://localhost:1337"; // or the Strapi URL if in production

const BlogService = {
  getBlogs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/blogs`);
      return response.data.data; // Adjust this according to Strapi API response structure
    } catch (error) {
      console.error("Error fetching blogs", error);
      throw error;
    }
  },
};

export default BlogService;
