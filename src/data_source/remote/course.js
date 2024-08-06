import axios from "axios";

export const Courses= {
  addCourse: async (title, description,instrustor) => {
    try {
      const { data } = await axios.post("http://localhost:8000/cources", {
        title,
        description,
        instrustor,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },