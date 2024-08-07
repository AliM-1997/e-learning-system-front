import axios from "axios";

export const file = {
  upload: async (file, uploadedBy, forCourse) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploadedBy", uploadedBy);
    formData.append("forCourse", forCourse);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/file/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data;
    } catch (error) {
      console.error("Error uploading file:", error); // Detailed error logging
      throw error;
    }
  },
};
