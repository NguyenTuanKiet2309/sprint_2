import { useEffect, useState } from "react";
import "../checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductOnCart, totalProductOnCart } from "../services/CartService";
import CurrencyFormat from "./CurrencyFormat";
import { getCart, getCount } from "../store/action/CartAction";
import { payWithVNpay } from "../services/PaymentService";
import Swal from "sweetalert2";
import { getInfoUser } from "../services/UserService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function PayPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [numProduct, setNumProduct] = useState(0);
  const numberOfProductsInCart = useSelector(getCart);
  const getCountCheck = useSelector(getCount);
  const [flag, setFlag] = useState(false);
  const [note, setNote] = useState(" ");
  const email = localStorage.getItem("username");
  const [user, setUser] = useState(null);

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const getToltalProductOnCart = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const data = await totalProductOnCart(headers);
      setNumProduct(data);
    } catch (error) {
      setNumProduct(0);
    }
  };
  const getUser = async () => {
    try {
      const data = await getInfoUser(email);
      setUser(data);
    } catch {
      Swal.fire("Đăng nhập để lấy thông tin");
    }
  };
  const getListProduct = async () => {
    try {
      const data = await listProductOnCart(headers);
      console.log(headers);

      setProducts(data);
    } catch (error) {}
  };
  const totalAmount = products.reduce((total, p) => {
    return total + p.product.price * p.quantity;
  }, 0);
  const onSubmit = async (values) => {
    console.log(values);
    console.log(user);
    Swal.fire({
      icon: "warning",
      title: "Xác nhận thông tin",
      text: "Hãy kiểm tra thông tin trước khi thanh toán",
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then(async (res) => {
      if (res.isConfirmed) {
        if (
          values.username == "" &&
          values.phoneNumber == "" &&
          values.address == "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        }
        // 1 trường
        else if (
          values.username != "" &&
          values.phoneNumber == "" &&
          values.address == "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username == "" &&
          values.phoneNumber != "" &&
          values.address == "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username == "" &&
          values.phoneNumber == "" &&
          values.address != "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username == "" &&
          values.phoneNumber == "" &&
          values.address == "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } 
        // 2 trường
        else if (
          values.username != "" &&
          values.phoneNumber != "" &&
          values.address == "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username != "" &&
          values.phoneNumber == "" &&
          values.address != "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username != "" &&
          values.phoneNumber == "" &&
          values.address == "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username == "" &&
          values.phoneNumber != "" &&
          values.address != "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username == "" &&
          values.phoneNumber != "" &&
          values.address == "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else if (
          values.username == "" &&
          values.phoneNumber == "" &&
          values.address != "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        }
        // 3 trường
        else if (
          values.username != "" &&
          values.phoneNumber!= "" &&
          values.address != "" &&
          values.note == ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        }else if (
          values.username != "" &&
          values.phoneNumber != "" &&
          values.address == "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        }else if (
          values.username != "" &&
          values.phoneNumber == "" &&
          values.address != "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", user.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        }else if (
          values.username == "" &&
          values.phoneNumber != "" &&
          values.address != "" &&
          values.note != ""
        ) {
          localStorage.setItem("name", user.nameUser);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        } else {
          localStorage.setItem("name", values.username);
          localStorage.setItem("address", values.address);
          localStorage.setItem("phone", values.phoneNumber);
          localStorage.setItem("note", values.note);
          localStorage.setItem("code", 0);
          const data = await payWithVNpay(totalAmount);
          window.location.href = data;
        }
      } else if (res.dismiss === Swal.DismissReason.cancel) {
      }
    });
  };
  useEffect(() => {
    getListProduct();
    getUser();
    getToltalProductOnCart();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ROLEX WORLD | Thanh Toán";
  }, []);
  return (
    <>
      <div className="breacrumb-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text product-more">
              <a href="./home.html">
               Trang chủ
              </a>
              <a>
                <span>Giỏ hàng</span>
              </a>

              <span>Thanh Toán</span>
            </div>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          username: "",
          phoneNumber: "",
          address: "",
          note: "",
        }}
        validationSchema={yup.object({
          username: yup
            .string()
            .min(5, "Ít nhất 5 kí tự")
            .max(50, "Tối đa 50 kí tự"),
          numberPhone: yup
            .string()
            .matches(
              /^(0[0-9]{9})$/,
              "Số điện thoại không hợp lệ, phải bắt đầu từ số 0"
            ),
          address: yup
            .string()
            .min(10, "Địa chỉ nên rõ ràng để nhận hàng")
            .max(100, "Địa chỉ trong cái ấp nào vậy bro"),
        })}
        onSubmit={(values) => onSubmit(values)}
      >
        <Form>
          <div className="container page-checkout ">
            <div className="row">
              <div className=" col-md-6">
                <div className="">
                  <div
                    className="row"
                    style={{ justifyContent: "space-around" }}
                  >
                    <h3
                      style={{
                        padding: "25px 0px 20px 0px",
                        paddingTop: "25px",
                        paddingBottom: "20px",
                      }}
                    >
                      Vui Lòng Điền Thông tin Người Nhận
                    </h3>
                    <div style={{ float: "right" }}>
                      <img
                        style={{ width: "80px", height: "80px" }}
                        src="https://play-lh.googleusercontent.com/o-_z132f10zwrco4NXk4sFqmGylqXBjfcwR8-wK0lO1Wk4gzRXi4IZJdhwVlEAtpyQ"
                      ></img>
                    </div>
                  </div>
                  <div className="error" style={{ textAlign: "left" }}>
                    * Để trống nếu thông tin chính là bạn
                  </div>
                  <label htmlFor="username">
                    <i className="fa fa-user" /> Tên Người Nhận
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nguyễn Tuấn Kiệt"
                    // onChange={(e) => {
                    //   setName(e.target.value);
                    // }}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                  <label htmlFor="phoneNumber">
                    <i className="fa fa-envelope" /> Số Điện Thoại Người Nhận
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="09xx.xxx.xxx"
                    // onChange={(e) => {
                    //   setPhone(e.target.value);
                    // }}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error"
                  />
                  <label htmlFor="address">
                    <i className="fa fa-address-card" /> Địa Chỉ Người Nhận
                  </label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder="101 Ung Văn Khiêm, Quận Hải Châu, Tp. Đà nẵng"
                    // onChange={(e) => {
                    //   setAddress(e.target.value);
                    // }}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error"
                  />
                  <label htmlFor="note">
                    <i className="fa fa-institution" /> Ghi Chú
                  </label>
                  <Field
                    as="textarea"
                    style={{ width: "100%" }}
                    id="note"
                    name="note"
                    placeholder="Viết ghi chú cho cửa hàng ở đây ... "
                    className=""
                    // onChange={(e) => {
                    //   setNote(e.target.value);
                    // }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="">
                  <h4 style={{ padding: "5px 0px 5px 10px" }}>
                    Sản phẩm
                    <span className="price" style={{ color: "black" }}>
                      <i className="fa fa-shopping-cart" />
                      <b>
                        {" "}
                        {getCountCheck == 0
                          ? numProduct
                          : numberOfProductsInCart}
                      </b>
                    </span>
                  </h4>
                  <div>
                    {products.map((p, index) => {
                      return (
                        <div className="row">
                          <img
                            className="col-3"
                            src={p.product.img}
                            style={{
                              width: "100px",
                              height: "100px",
                              paddingBottom: "10px",
                            }}
                          />{" "}
                          <div className=" col-3">
                            <div>{p.product.productName}</div>
                            <br />
                            <div>{p.product.productCode}</div>
                          </div>
                          <span className="price col-6">
                            <div style={{ float: "right" }}>
                              <CurrencyFormat value={p.product.price} /> VNĐ
                            </div>
                            <div>x {p.quantity}</div>
                            <hr />
                          </span>
                          <hr />
                        </div>
                      );
                    })}
                  </div>

                  <hr />
                  <h3>
                    Tổng tiền{" "}
                    <span className="price" style={{ color: "black" }}>
                      <b style={{ fontSize: "20px" }}>
                        {" "}
                        <CurrencyFormat value={totalAmount} /> VNĐ
                      </b>
                    </span>
                  </h3>
                </div>
                <button
                  type="submit"
                  defaultValue="Continue to checkout"
                  className="btn"
                  style={{ border: "1px solid #d5d5d5" }}
                  // onClick={() => payment(totalAmount)}
                >
                  {" "}
                  Thanh toán với VNPay
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
