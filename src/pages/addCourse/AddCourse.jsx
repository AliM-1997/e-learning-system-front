import React, { useState, useEffect } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/Button";
import { Courses } from "../../data_source/remote/course";
import { loadCourse } from "../../redux/courseSlice";
import { useDispatch } from "react-redux";
import "./AddCourse.css";

const AddCourse = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);

  // Fetch all courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await Courses.getAllCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, [editing]);

  const handleSubmit = async () => {
    if (title === "" || description === "" || instructor === "") {
      alert("Fields cannot be empty");
      return;
    }

    try {
      let data;
      if (editing) {
        data = await Courses.updateCourse(editing._id, {
          title,
          description,
          instructor,
        });
      } else {
        data = await Courses.addCourse(title, description, instructor);
      }

      console.log(data);

      if (data) {
        dispatch(
          loadCourse({
            title: data.title,
            description: data.description,
            instructor: data.instructor,
          })
        );
        setEditing(null);
        setTitle("");
        setDescription("");
        setInstructor("");
      }
    } catch (error) {
      console.error("Failed to submit course:", error);
    }
  };

  const handleEdit = (course) => {
    setTitle(course.title);
    setDescription(course.description);
    setInstructor(course.instructor);
    setEditing(course);
  };

  const handleDelete = async (id) => {
    try {
      await Courses.deleteCourse(id);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  return (
    <div className="page flex column align-center">
      <div className="course-input flex column center white-bg rounded">
        <Input
          placeholder="Title"
          value={title}
          type="text"
          name="Course"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={description}
          type="text"
          name="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          placeholder="Instructor"
          value={instructor}
          type="text"
          name="Instructor"
          onChange={(e) => setInstructor(e.target.value)}
        />
        <Button
          text={editing ? "Update" : "Submit"}
          onMouseClick={handleSubmit}
        />
      </div>
      <div className="course-list-container">
        <h3>List of Courses</h3>
        <table className="course-list-table page">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Instructor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.instructor}</td>
                <td>
                  <button
                    className="btn edit-btn"
                    onClick={() => handleEdit(course)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCourse;
