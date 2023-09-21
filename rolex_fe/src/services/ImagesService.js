import axios from "axios";

export async function findImagesByProductId(productId) {
  const res = await axios.get(`http://localhost:8080/images/` + productId);
  return res.data;
}
