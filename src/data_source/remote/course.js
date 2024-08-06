import axios from "axios";

export const Courses = {
  addCourse: async (title, description, instructor) => {
    try {
      const { data } = await axios.post("http://localhost:8000/cources", {
        title,
        description,
        instructor,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
