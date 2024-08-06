import axios from "axios";
const BASE_URL = "http://localhost:8000";
export const withdrawRequest = {
  allrequest: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/allWithdraw`);
      return data;
    } catch (error) {
      console.error("Error fetching withdrawals:", error);
      throw error;
    }
  },

  handleWithdrawal: async (classId, withdrawalId, status) => {
    console.log("form api status is:", status);
    try {
      console.log("Sending withdrawal request with data:", {
        classId,
        withdrawalId,
        status,
      });

      const { data } = await axios.post(`${BASE_URL}/withdrawals/handle`, {
        classId,
        withdrawalId,
        status,
      });

      console.log("Response from server:", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
