import React, { useState } from "react";
import Input from "../input/input";
import "./WithDrawComponent.css";

const WithDrawComponent = ({ withdrawal, handleWithdrawal }) => {
  const [status, setStatus] = useState("pending");

  return (
    <tr key={withdrawal._id}>
      <td>{withdrawal.class}</td>
      <td>{withdrawal.user}</td>
      <td>{withdrawal.reason}</td>
      <td>
        <Input
          className="status-input"
          placeholder="approved/rejected"
          type="text"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </td>
      <td>
        <button
          className="btn edit-btn"
          onClick={() => handleWithdrawal(withdrawal)}
        >
          Edit
        </button>
        <button className="btn delete-btn">Delete</button>
      </td>
    </tr>
  );
};

export default WithDrawComponent;
