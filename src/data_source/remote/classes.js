import axios from "axios";

const BASE_URL = "http://localhost:8000";
export const classRemote = {
  getAllClasses: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/classes`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  getClassById: async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/classes/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },

  addClass: async (title, description, instructor) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/classes`,
        { title, description, instructor },
        { headers: { "Content-Type": "application/json" } }
      );
      return data;
    } catch (error) {
      throw error;
    }
  },

  updateClass: async (id, updates) => {
    try {
      const { data } = await axios.put(`${BASE_URL}/classes/${id}`, updates, {
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },

  deleteClass: async (id) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/classes/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
