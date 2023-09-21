import axios from "axios";
export const getInfoUser = async (email) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/user?email=${email}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const getOrderDetail = async (idOrder) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/order?id=${idOrder}`
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };