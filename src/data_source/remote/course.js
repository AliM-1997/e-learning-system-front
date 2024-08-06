// import axios from "axios";

// export const Courses = {
//   addCourse: async (title, description, instructor) => {
//     try {
//       const { data } = await axios.post("http://localhost:8000/cources", {
//         title,
//         description,
//         instructor,
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   },
// };
import axios from "axios";

const BASE_URL = "http://localhost:8000/cources"; // Ensure this URL matches your backend route

export const Courses = {
  addCourse: async (title, description, instructor) => {
    try {
      const { data } = await axios.post(BASE_URL, {
        title,
        description,
        instructor,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },

  getAllCourses: async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      throw error;
    }
  },

  getCourseById: async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  updateCourse: async (id, updates) => {
    try {
      const { data } = await axios.put(`${BASE_URL}/${id}`, updates, {
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },

  deleteCourse: async (id) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
