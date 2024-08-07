import React, { useState, useEffect } from "react";
import { file } from "../../data_source/remote/file"; // Adjust import path as needed
import axios from "axios";
import "./File.css";
const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedBy, setUploadedBy] = useState("");
  const [forCourse, setForCourse] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile || !uploadedBy || !forCourse) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await file.upload(selectedFile, uploadedBy, forCourse);
      console.log("File uploaded successfully:", response);
      fetchUploadedFiles(); // Refresh the list of uploaded files
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/file"); // Add endpoint for fetching files
      setUploadedFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  return (
    <div className="file-upload-page">
      <div className="upload-form">
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="Uploaded By"
          value={uploadedBy}
          onChange={(e) => setUploadedBy(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={forCourse}
          onChange={(e) => setForCourse(e.target.value)}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>

      <div className="file-list">
        <h3>Uploaded Files</h3>
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file._id}>
              <a
                href={`http://localhost:8000/file/download/${file._id}`}
                download
              >
                {file.filename}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUploadPage;
