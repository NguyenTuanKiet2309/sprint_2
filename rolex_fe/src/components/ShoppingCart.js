import { useState, useEffect } from "react";

import axios from "axios";
import "../cart.css";
import { Link } from "react-router-dom";
import {
  addProductToCart,
  deleteProductOnCart,
  listProductOnCart,
  miniusProductToCart,
  totalProductOnCart,
} from "../services/CartService";
import CurrencyFormat from "./CurrencyFormat";
import Swal from "sweetalert2";
import { updateCart } from "../store/action/CartAction";
import { useDispatch } from "react-redux";
import { payWithVNpay } from "../services/PaymentService";
import { getProductQuantity } from "../services/ProductsService";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [productQuantity, setProductQuantity] = useState({});

 
  const updateProductQuantity = async (productId) => {
    const quantity = await getProductQuantity(productId);
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: quantity,
    }));
  };
  // var totalPrice = 0;
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const getListProduct = async () => {
    try {
      const data = await listProductOnCart(headers);
      console.log(headers);
      console.log(data);
      setProducts(data);
    } catch (error) {}
  };
  const handleOnClickDelete = async (idProduct, nameProduct) => {
    Swal.fire({
      title: `Bạn muốn xóa ${nameProduct} khỏi giỏ hàng ?`,
      text: "chức năng này không thể hoàn tác",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProductOnCart(idProduct, headers);
        setFlag(!flag);
        const data = await totalProductOnCart(headers);
        dispatch(updateCart(data));
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const totalAmount = products.reduce((total, p) => {
    return total + p.product.price * p.quantity;
  }, 0);
  const handleButtonPlus = async (idProduct) => {
    const productInCart = products.find(
      (p) => p.product.productId === idProduct
    );
    const availableQuantity = await getProductQuantity(idProduct);

    if (productInCart && productInCart.quantity >= availableQuantity) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Không được vượt quá số lượng có sẵn !",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    await addProductToCart(idProduct, headers);
    setFlag(!flag);
  };

  const handleButtonMinius = async (idProduct) => {
    await miniusProductToCart(idProduct, headers);
    setFlag(!flag);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
      document.title = "ROLEX WORLD | Giỏ hàng" 
    getListProduct();
    products.forEach((p) => {
      updateProductQuantity(p.product.productId);
    });
  }, [flag]);
  return (
    <>
      <div className="breacrumb-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text product-more">
              <a href="./home.html">
                <i className="fa fa-home" /> Trang chủ
              </a>
              <span>Giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section Begin */}
      {/* Shopping Cart Section Begin */}
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th className="p-name">Tên Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng giá</th>
                      <th>
                        <i className="ti-close" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p)  => {
                        const availableQuantity = productQuantity[p.product.productId];
                      return (
                        <tr>
                          <td className="cart-pic first-row">
                            <img
                              src={p.product.img}
                              alt=""
                              style={{ width: "100px", height: "100px" }}
                            />
                          </td>
                          <td className="cart-title first-row">
                            <h5>{p.product.productName}</h5>
                          </td>
                          <td className="p-price first-row">
                            <CurrencyFormat value={p.product.price} /> VNĐ
                          </td>
                          <td className="qua-col first-row">
                            <div className="quantity">
                              <div className="pro-qty">
                                <button
                                  className="reduce-cart"
                                  onClick={() => {
                                    handleButtonMinius(p.product.productId);
                                  }}
                                >
                                  <i class="fa-solid fa-minus"></i>
                                </button>
                                <input
                                  type="number"
                                  readOnly
                                  value={p.quantity}
                                  max={availableQuantity}
                                />
                                <button
                                  className="increase-cart"
                                  onClick={() => {
                                    handleButtonPlus(p.product.productId);
                                  }}
                                >
                                  <i class="fa-solid fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="p-price first-row">
                            <CurrencyFormat
                              value={p.product.price * p.quantity}
                            />{" "}
                            VNĐ
                          </td>

                          <td
                            className="close-td first-row"
                            onClick={() => {
                              handleOnClickDelete(
                                p.product.productId,
                                p.product.productName
                              );
                            }}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="cart-buttons">
                    <Link
                      to="/rolex-world"
                      className="primary-btn continue-shop"
                    >
                      Về Trang Chủ
                    </Link>
                
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-4">
                  <div className="proceed-checkout">
                    <ul>
                      <li className="cart-total">
                        Tổng tiền{" "}
                        <span style={{ float: "right" }}>
                          <CurrencyFormat value={totalAmount} /> VNĐ
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/rolex-world/check-out"
                      className="proceed-btn"
                    >
                      Thanh Toán
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
