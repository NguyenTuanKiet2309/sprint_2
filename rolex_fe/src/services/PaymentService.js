import axios from "axios";

export const payWithVNpay = async (total) => {
  const res = await axios.post(`http://localhost:8080/vnpay/create/${total}`);
  return res.data;
};

export const returnFromPayment = async (
  address,
  note,
  phone,
  name,
  username
) => {
 const res = await axios.post(
    `http://localhost:8080/vnpay/return/${address}/${note}/${phone}/${name}/${username}`
  );
return res.data;
};

export const returnFromPaymentNow = async (
  address,
  note,
  phone,
  name,
  username,
  idProduct
) => {
  const res = await axios.post(
    `http://localhost:8080/vnpay/return/paynow/${address}/${note}/${phone}/${name}/${username}/${idProduct}`
  );
  return res.data;
};
