import React, { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/Button";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  console.log(title);

  const handleSubmit = async () => {
    console.log("hello");
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
        value=""
        type="text"
        name="Description"
      />
      <Input placeholder="Instructor" value="" type="text" name="Instructor" />
      <Button text="Submit" onMouseClick={handleSubmit} />
    </div>
  );
};

export default AddCourse;
