import React, { useState, useEffect } from "react";
import { classRemote } from "../../data_source/remote/classes";
import "./ListClasses.css";
import ClassComponent from "../../components/classComponent/ClassComponent";

const ClassList = () => {
  const [classes, setClasses] = useState([]);
  const [editingClass, setEditingClass] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    instructor: "",
  });

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await classRemote.getAllClasses();
        setClasses(data);
      } catch (error) {
        console.error("Failed to fetch classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const handleEdit = (id) => {
    const classToEdit = classes.find((classItem) => classItem._id === id);
    setEditingClass(id);
    setEditForm({
      title: classToEdit.title,
      description: classToEdit.description,
      instructor: classToEdit.instructor,
    });
  };

  const handleSaveEdit = async () => {
    try {
      await classRemote.updateClass(editingClass, editForm);
      setClasses(
        classes.map((classItem) =>
          classItem._id === editingClass
            ? { ...classItem, ...editForm }
            : classItem
        )
      );
      setEditingClass(null);
    } catch (error) {
      console.error("Failed to update class:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await classRemote.deleteClass(id);
      setClasses(classes.filter((classItem) => classItem._id !== id));
    } catch (error) {
      console.error("Failed to delete class:", error);
    }
  };

  return (
    <div className="class-list-container page">
      <h1>Class List</h1>
      <table className="class-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.length > 0 ? (
            classes.map((classItem) => (
              <ClassComponent
                key={classItem._id}
                classItem={classItem}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">No classes available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;
