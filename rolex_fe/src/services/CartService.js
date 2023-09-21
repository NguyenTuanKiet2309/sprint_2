import axios from "axios";

export const addProductToCart = async (idProduct, headers) => {
  const res = await axios.post(
    "http://localhost:8080/cart/add/" + idProduct,
    null,
    { headers }
  );
};

export const addProductToCartDetail = async (idProduct, num, headers) => {
  const res = await axios.post(
    `http://localhost:8080/cart/add/${idProduct}/${num}`,
    null,
    { headers }
  );
};

export const miniusProductToCart = async (idProduct, headers) => {
  const res = await axios.post(
    "http://localhost:8080/cart/minius/" + idProduct,
    null,
    { headers }
  );
};

export const totalProductOnCart = async (headers) => {
  const res = await axios.get("http://localhost:8080/cart/product-on-cart", {
    headers,
  });
  return res.data;
};

export const listProductOnCart = async (headers) => {
  const res = await axios.get("http://localhost:8080/cart/list", { headers });
  return res.data;
};

export const deleteProductOnCart = async (idProduct, headers) => {
  const res = await axios.delete(
    "http://localhost:8080/cart/delete/" + idProduct,
    { headers }
  );
  return res.data;
};
export const countProductOnCart = async (idProduct,headers) => {
  const res = await axios.get(
    "http://localhost:8080/cart/count-product/" + idProduct,{headers}
  );
  return res.data;
};
