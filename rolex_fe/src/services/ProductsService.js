import axios from "axios";

export async function findProductByCategory(
  page,
  categoryName,
  typeName,
  material,
  sizePage
) {
  const res = await axios.get(
    `http://localhost:8080/products/list?page=${page}&&categoryName=${categoryName}&&typeName=${typeName}&&material=${material}&&sizePage=${sizePage}`
  );
  return res.data;
}
export async function findSameProductByCategory(categoryId) {
  const res = await axios.get(
    `http://localhost:8080/products/same/${categoryId}`
  );
  return res.data;
}
export async function findProductByGender(page, typeName) {
  const res = await axios.get(
    `http://localhost:8080/products/typeProduct?page=${page}&&typeName=${typeName}`
  );
  return res.data;
}
export async function findDetailsByProductId(productId, categoryId) {
  const res = await axios.get(
    `http://localhost:8080/products/${productId}/${categoryId}`
  );
  return res.data;
}

export async function findProductsort(page, categoryName, codes) {
  const res = await axios.get(
    `http://localhost:8080/products/sort?page=${page}&&categoryName=${categoryName}&&code=${codes}`
  );
  return res.data;
}

export const getProductQuantity = async (idProduct) => {
  const res = await axios.get(
    `http://localhost:8080/products/${idProduct}/quantity`
  );
  return res.data;
};
