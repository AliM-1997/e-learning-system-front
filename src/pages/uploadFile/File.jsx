import React, { useState } from "react";
import axios from "axios";
import { file } from "../../data_source/remote/file";
import { useSelector } from "react-redux";

const FileUpload = () => {
  const state = useSelector((global) => global.user);
  console.log(state);
  const [fileData, setFileData] = useState(null);
  const [filename, setFilename] = useState("");
  const [filepath, setFilepath] = useState("");
  const [filetype, setFiletype] = useState("");
  const [uploadBy, setUploadBy] = useState("");
  const [forCourse, setForCourse] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFilename(selectedFile.name);
      setFiletype(selectedFile.type);
      setFileData(selectedFile);
    }
  };

  const handleUploadedByChange = (event) => {
    setUploadBy(event.target.value);
  };

  const handleForCourseChange = (event) => {
    setForCourse(event.target.value);
  };

  const handleUpload = async () => {
    if (!fileData) {
      setError("No file selected.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("file", fileData);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess("File uploaded successfully.");
      console.log(response.data);
    } catch (err) {
      setError("Failed to upload file.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Uploaded By"
        value={uploadBy}
        onChange={handleUploadedByChange}
      />
      <input
        type="text"
        placeholder="For Course"
        value={forCourse}
        onChange={handleForCourseChange}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default FileUpload;
