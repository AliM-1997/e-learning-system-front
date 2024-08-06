import axios from "axios";

export const file = {
  upload: async (filename, filepath, filetype, uploadBy, forCourse) => {
    try {
      const { data } = await axios.post("http://localhost:8000/upload/file", {
        filename,
        filepath,
        filetype,
        uploadBy,
        forCourse,
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};
