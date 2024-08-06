import React, { useEffect, useState } from "react";
import "./WithDrawal.css";
import { withdrawRequest } from "../../data_source/remote/withdraw";
import WithDrawComponent from "../../components/withdrawComponent/WithDrawComponent";

const WithDrawal = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  useEffect(() => {
    const fetchWithdrawals = async () => {
      const data = await withdrawRequest.allrequest();
      setWithdrawals(data);
    };
    fetchWithdrawals();
  }, []);

  const edit = async (withdrawal) => {
    console.log("from handleWithDrawal", withdrawal);
    try {
      const classId = withdrawal.class;
      const withdrawalId = withdrawal._id;
      const status = withdrawal.status;

      console.log("Class ID:", classId);
      console.log("Withdrawal ID:", withdrawalId);
      console.log("Status:", status);

      const response = await withdrawRequest.handleWithdrawal({
        classId,
        withdrawalId,
        status,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>User</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {withdrawals.map((withdrawal) => (
          <WithDrawComponent
            key={withdrawal._id}
            withdrawal={withdrawal}
            handleWithdrawal={edit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default WithDrawal;
