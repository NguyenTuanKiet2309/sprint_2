import axios from "axios";

export async function findProductByCategory(page,categoryId) {
  const res = await axios.get(
    `http://localhost:8080/products/list?page=${page}&&categoryId=${categoryId}`
  );
  return res.data;
}
export async function findProductByGender(page,typeId) {  
  const res = await axios.get(
    `http://localhost:8080/products/typeProduct?page=${page}&&typeId=${typeId}`
  );
  return res.data;
}