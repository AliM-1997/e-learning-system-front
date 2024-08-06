import React, { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/Button";
import { Courses } from "../../data_source/remote/course";
import "./AddCourse.css";
import { loadCourse } from "../../redux/courseSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  //   const navigate = useNavigate();

  const handleSubmit = async () => {
    if (title === "" || description === "" || instructor === "") {
      alert("Fields cannot be empty");
      return;
    }
    const data = await Courses.addCourse(title, description, instructor);
    console.log(data);
    if (data) {
      dispatch(
        loadCourse({
          title: data.title,
          description: data.description,
          instructor: data.instructor,
        })
      );
    }
  };
  return (
    <div className="page flex column align-center ">
      <div className="course-input flex column center white-bg rounded ">
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
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Input
          placeholder="Instructor"
          value={instructor}
          type="text"
          name="Instructor"
          onChange={(e) => setInstructor(e.target.value)}
        />
        <Button text="Submit" onMouseClick={handleSubmit} />
      </div>
      <div>
        <h3>List Courses</h3>
      </div>
    </div>
  );
};

export default AddCourse;
