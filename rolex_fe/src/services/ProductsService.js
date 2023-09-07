import axios from "axios";

export async function findProductByCategory(categoryId) {
  const res = await axios.get(
    "http://localhost:8080/products?categoryId=" + categoryId
  );
  return res.data;
}
