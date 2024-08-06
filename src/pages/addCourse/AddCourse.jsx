import React, { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/Button";
import { Courses } from "../../data_source/remote/course";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  console.log(title);

  const handleSubmit = async () => {
    const data = await Courses.addCourse(title, description, instructor);
    console.log(data);
  };
  return (
    <div className="page flex center">
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
  );
};

export default AddCourse;
