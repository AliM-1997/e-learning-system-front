import React from "react";
import "./ClassComponent.css";
const ClassComponent = ({ classItem, onEdit, onDelete }) => {
  return (
    <div className="class-item flex ">
      <h2>{classItem.title}</h2>
      <p>{classItem.description}</p>
      <p>
        <strong>Instructor:</strong> {classItem.instructor}
      </p>
      <div>
        <div className="">
          <button
            className="btn edit-btn"
            onClick={() => onEdit(classItem._id)}
          >
            Edit
          </button>
          <button
            className="btn delete-btn"
            onClick={() => onDelete(classItem._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassComponent;
