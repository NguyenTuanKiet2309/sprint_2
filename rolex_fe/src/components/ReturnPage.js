import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../returnpage.css";
import { Link, useNavigate } from "react-router-dom";
import {
  returnFromPayment,
  returnFromPaymentNow,
} from "../services/PaymentService";
import CurrencyFormat from "./CurrencyFormat";
import { getInfoUser, getOrderDetail } from "../services/UserService";
import moment from "moment";

export default function ReturnPage() {
  const navigate = useNavigate();
  const [responseCode, setResponseCode] = useState();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const phone = localStorage.getItem("phone");
  const note = localStorage.getItem("note");
  const email = localStorage.getItem("username");
  const code = localStorage.getItem("code");
  const idProduct = localStorage.getItem("idProduct");
  const [orderDetail, setOrderDetails] = useState([]);
  const [flag, setFlag] = useState(false);
  const [paid, setPaid] = useState(true);
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [user, setUser] = useState({});
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const getURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const responseCode = urlParams.get("vnp_ResponseCode");
    console.log(responseCode);
    setResponseCode(responseCode);
  };

  const display = () => {
    if (responseCode == "00") {
      if (code == 0) {
        Swal.fire({
          icon: "success",
          timer: 2000,
          title: "Thanh toán thành công",
          showConfirmButton: false,
        }).then(async () => {
          const data = await returnFromPayment(
            address,
            note,
            phone,
            name,
            email
          );
          setOrderDetails(data);
          console.log(data);
          setFlag(!flag);
          setPaid(false);
          console.log(orderDetail);
          localStorage.removeItem("name");
          localStorage.removeItem("phone");
          localStorage.removeItem("address");
          localStorage.removeItem("note");
          localStorage.removeItem("code");
          localStorage.setItem("resetCart", 0);
          // navigate("/rolex-world");
        });
      } else if (code == 1) {
        Swal.fire({
          icon: "success",
          timer: 2000,
          title: "Thanh toán thành công",
          showConfirmButton: false,
        }).then(async () => {
          const data = await returnFromPaymentNow(
            address,
            note,
            phone,
            name,
            email,
            idProduct
          );
          setFlag(!flag);
          console.log(data);
          setOrderDetails(data);
          console.log(orderDetail);
          setPaid(false);
          localStorage.removeItem("name");
          localStorage.removeItem("phone");
          localStorage.removeItem("address");
          localStorage.removeItem("note");
          localStorage.removeItem("code");
          localStorage.removeItem("idProduct");
          localStorage.setItem("resetCart", 0);
          // navigate("/rolex-world");
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        timer: 2000,
        title: "Thanh toán thất bại",
        showConfirmButton: false,
      }).then(() => {
        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        localStorage.removeItem("address");
        localStorage.removeItem("note");
        localStorage.removeItem("code");
        setPaid(true);
      });
    }
  };

  const getOdderDetailByOderId = async () => {
    try {
      const data = await getOrderDetail(orderDetail[0].orderId.orderId);
      setListOrderDetail(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  // getUser
  const getUserOrder = async () => {
    try {
      const data = await getInfoUser(orderDetail[0].orderId.userId.email);
      setUser(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const totalAmount = listOrderDetail.reduce((total, p) => {
    return total + p.productId.price * p.quantityOrderDetail;
  }, 0);

  useEffect(() => {
    getOdderDetailByOderId();
    getUserOrder();
  }, [flag]);
  useEffect(() => {
    getURL();
  }, []);
  useEffect(() => {
    display();
  }, [responseCode, orderDetail]);

  return (
    <>
      <div className="breacrumb-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text product-more">
              <a href="./home.html">
                <i className="fa fa-home" /> Trang chủ
              </a>
              <a>
                <span>Giỏ hàng</span>
              </a>

              <span>Thanh Toán VNPAY</span>
            </div>
          </div>
        </div>
      </div>

      <section className="row container-fluid" style={{ paddingTop: "20px",paddingLeft:"40px" }}>
        <section className="col-md-8" style={{ fontFamily: "sans-serif" }}>
          <div className="">
            <div className="">
              <div className="">
                <div className="card" style={{ borderRadius: "10px" }}>
                  <div className="card-header px-4 py-5">
                    <h5 className="text-muted mb-0">
                      Cảm ơn bạn đã tin tưởng đặt hàng ở Rolex World,{" "}
                      <span style={{ color: "#145f3d" }}>
                        {" "}
                        {user.nameUser}!
                      </span>
                      <br />
                      <span>
                        {" "}
                        Chúng tôi cam kết sẽ nâng tầm sự đẳng cấp và tự tin dành
                        cho bạn.
                      </span>
                    </h5>
                  </div>
                  <div className="card-body p-4" style={{ minHeight: "100%" }}>
                    <div className="d-flex justify-content-between align-items-center mb-4 ">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#145f3d" }}
                      >
                        Sản phẩm đã đặt
                      </p>
                      <div className="d-flex justify-content-between">
                        {listOrderDetail[0] ? (
                          <span className="me-3">
                            Ngày đặt hàng:{" "}
                            {moment(
                              listOrderDetail[0].orderId.dateOrder
                            ).format("DD/MM/YYYY HH:mm")}
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="card shadow-0 border mb-4">
                      <div className="card-body">
                        {listOrderDetail &&
                          listOrderDetail.map((o) => {
                            return (
                              <div className="row">
                                <div className="col-md-2">
                                  <img
                                    src={o.productId.img}
                                    className="img-fluid"
                                    alt="Phone"
                                  />
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0">
                                    {o.productId.productName}
                                  </p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">
                                    {o.productId.material}
                                  </p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">
                                    {o.productId.size} mm
                                  </p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">
                                    x {o.quantityOrderDetail}
                                  </p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">
                                    <CurrencyFormat value={o.productId.price}>
                                      {" "}
                                    </CurrencyFormat>{" "}
                                    VNĐ
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        <hr
                          className="mb-4"
                          style={{
                            backgroundColor: "#e0e0e0",
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="card-footer border-0 px-4 row"
                      style={{
                        backgroundColor: "#a8729a",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        backgroundColor: "#145f3d",
                      }}
                    >
                      <h5 className="d-flex align-items-center text-white text-uppercase mb-0 col-md-8">
                        Tổng tiền:  { " "} 
                        <p className="h2 mb-0 ms-2">
                          <span>
                          {" "}
                          <CurrencyFormat
                            value={totalAmount}
                          ></CurrencyFormat>{" "} 
                            VNĐ
                          </span>
                        </p>
                      </h5>
                      {paid ? (
                        <h5 className="d-flex align-items-right text-white text-uppercase mb-0 col-md-4 brand_detail-box">
                          <button>Thanh toán Lỗi</button>
                        </h5>
                      ) : (
                        <h5 className="d-flex align-items-right text-white text-uppercase mb-0 col-md-4 brand_detail-box">
                          <button>Đã Thanh Toán</button>
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid h-100 brand_detail-box"
            style={{ paddingBottom: "20px" }}
          >
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-2"></div>
              <div className="col-md-12">
                <button>
                  <Link
                    to="/rolex-world"
                    className=""
                    style={{ color: "black" }}
                  >
                    Về Trang Chủ
                  </Link>
                </button>
              </div>

              
            </div>
          </div>
        </section>
        <section className="col-md-4" style={{ fontFamily: "sans-serif" }}>
          <div className="" style={{paddingBottom:"20px"}}>
            <div className="">
              <div className="">
                <div className="card" style={{ borderRadius: "10px" }}>
                  <div className="">
                    <div className="card-header px-4 py-5">
                      <h5 className="text-muted mb-0">
                        <span> Thông tin người đặt</span>
                      </h5>
                    </div>
                    <div className="card shadow-0 border mb-4"></div>
                    <div className="card-body p-4">
                      {!listOrderDetail[0] ? (
                        <div className="">
                          <h3 className="h6">Người đặt hàng</h3>
                          <hr />
                        </div>
                      ) : (
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="lead fw-normal mb-0">
                              Người đặt hàng:{" "}
                              <span className="details-user">
                                {user.nameUser}
                              </span>
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="lead fw-normal mb-0">
                              Địa Chỉ Người Đặt:{" "}
                              <span className="details-user">
                                {user.address}
                              </span>
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="lead fw-normal mb-0">
                              SĐT Người Nhận:{" "}
                              <span className="details-user">
                                {user.phoneNumber}
                              </span>
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="card">
                        <div className="card-body">
                          <h3 className="h6">
                            Ghi chú dành cho đơn đặt hàng:{" "}
                          </h3>
                          <hr />
                          {listOrderDetail[0] ? (
                            <p>{listOrderDetail[0].orderId.note}</p>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="" style={{paddingBottom:"20px"}}>
            <div className="">
              <div className="">
                <div className="card" style={{ borderRadius: "10px" }}>
                  <div className="">
                    <div className="card-header px-4 py-5">
                      <h5 className="text-muted mb-0">
                        <span> Thông tin người nhận</span>
                      </h5>
                    </div>
                    <div className="card shadow-0 border mb-4"></div>
                    <div className="card-body p-4">
                      {!listOrderDetail[0] ? (
                        <div className="">
                          <h3 className="h6">Người nhận hàng:</h3>
                          <hr />
                        </div>
                      ) : (
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="lead fw-normal mb-0">
                              Người nhận hàng:{" "}
                              <span className="details-user">
                                {listOrderDetail[0].orderId.name_recipient}
                              </span>
                            </p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="lead d-flex justify-content-between">
                            <p className="lead fw-normal mb-0">
                              Địa chỉ nhận hàng:{" "}
                              <span className="details-user">
                                {listOrderDetail[0].orderId.address_recipient}
                              </span>
                            </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="lead d-flex justify-content-between">
                            <p className="lead fw-normal mb-0">
                             SĐT nhận hàng:{" "}
                              <span className="details-user">
                                {listOrderDetail[0].orderId.phone_recipient}
                              </span>
                            </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
      </section>
    </>
  );
}
