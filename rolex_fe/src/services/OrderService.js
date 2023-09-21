import axios from "axios";

export async function getAllHisToryOrder(page, username) {
  const res = await axios.get(
    `http://localhost:8080/order/history?page=${page}&&username=${username}`
  ); 
  return res.data;

};
