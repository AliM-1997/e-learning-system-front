import axios from "axios";

export const authRemote = {
  login: async (username, password) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
  signup: async (name, username, email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/users",
        {
          name,
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
};
