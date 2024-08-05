import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" ">
      <nav className="flex just-sb black-t ">
        <Link to="/add-class">Add Class</Link>
        <Link to="/list-students">List Students</Link>
        <Link to="/upload-file">Upload File</Link>
        <Link to="/withdrawal-requests">Withdrawal Requests</Link>
      </nav>
      <></>
    </div>
  );
};

export default Header;
