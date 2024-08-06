import React, { useState } from "react";
import "./WithDraw.css";
import Input from "../../components/input/input";
const WithDraw = () => {
  const [status, setStatus] = useState("pending");
  return (
    <div className="page">
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Student</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>John Doe</td>
            <td>Dropped due to schedule conflict</td>
            <td>
              <Input
                className="status-input"
                placeholder="approved/rejected"
                type="text"
                name=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </td>
            <td>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WithDraw;
