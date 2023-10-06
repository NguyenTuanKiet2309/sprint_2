import { useEffect, useState } from "react";
import { getAllHisToryOrder } from "../services/OrderService";
import { useLocation } from "react-router";
import { getOrderDetail } from "../services/UserService";
import Modal from "react-modal";
import CurrencyFormat from "./CurrencyFormat";
import moment from "moment";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "70%",
    backgroundColor: "white",
    color: "black",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  table: {
    color: "black",
    fontWeight: "bold",
  },
};
export default function HistoryOrder() {
  const username = localStorage.getItem("username");
  const location = useLocation();
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(0);
  const [details, setDetails] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const nextPage = async () => {
    setPage((page) => page + 1);
  };

  const prevPage = async () => {
    setPage((page) => page - 1);
  };
  const getHistoryOrder = async () => {
    try {
      const data = await getAllHisToryOrder(page, username);
      console.log(data);
      setHistory(data);
    } catch (e) {
      console.log(e);
    }
    
  };
  console.log(history);
  const getDetailsHistory = async (id) => {
    try {
      const data = await getOrderDetail(id);
      console.log(data);
      setDetails(data);
    } catch (e) {
      console.log(e);
    }
    openModal();
  };

  useEffect(() => {
    window.scrollTo(0,0);
    getHistoryOrder();
  }, [location, page]);
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
                <span>Người dùng</span>
              </a>

              <span>Lịch sử thanh toán</span>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section">
        <div className="container" style={{minHeight:"400px"}}>
          <div className="row">
            <div className="col-md-12">
              <h3 className="h5 mb-4 text-center"></h3>
              <div className="table-wrap">
                <table className="table">
                  <thead
                    className="thead-primary"
                    style={{
                      backgroundColor: "#145f3d",
                      color: "#fff",
                      fontFamily: "sans-serif",
                      height: "60px",
                    }}
                  >
                    <tr>
                      <th>STT</th>
                      <th>Người nhận</th>
                      <th>Ngày đặt hàng</th>
                      <th>Địa chỉ nhận hàng</th>
                      <th>Trạng thái</th>
                      <th>Số điện thoại</th>
                      <th>Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.content &&
                      history.content.map((h, index) => {
                        return (
                          <tr className="alert" role="alert" key={`oder_${index}`}>
                            <td>{(page*5)+index + 1}</td>
                            <td>{h.name_recipient}</td>
                            <td>
                              {moment(h.dateOrder).format("DD/MM/YYYY HH:mm")}
                            </td>
                            <td>{h.address_recipient}</td>
                            <td>{h.orderStatus ? 'Đã giao hàng' : 'Chưa giao hàng'}</td>
                            <td>{h.phone_recipient}</td>
                            <td>
                              <i
                                className="fa-solid fa-circle-info fa-lg"
                                style={{ color: "#145f3d" }}
                                onClick={() => {
                                  getDetailsHistory(h.orderId);
                                }}
                              ></i>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {history.totalPages > 1 ? (
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="ps-pagination">
                      <ul className="pagination justify-content-center">
                        {page > 0 && (
                          <li className="page-item">
                            <a
                              className="page-link"
                              rel="noindex, nofollow"
                              onClick={() => {
                                prevPage();
                                setActivePage(page - 1);
                              }}
                            >
                              ‹
                            </a>
                          </li>
                        )}
                        {Array.from(
                          { length: history.totalPages },
                          (_, index) => (
                            <li
                              key={index}
                              className={`page-item${
                                activePage === index ? " active" : ""
                              }`}
                            >
                              <a
                                className="page-link"
                                rel="noindex, nofollow"
                                onClick={() => {
                                  setPage(index);
                                  setActivePage(index);
                                }}
                              >
                                <sub>{index + 1}</sub>
                              </a>
                            </li>
                          )
                        )}
                        {page < history.totalPages - 1 && (
                          <li className="page-item">
                            <a
                              className="page-link"
                              rel="noindex, nofollow"
                              onClick={() => {
                                nextPage();
                                setActivePage((page)=>page + 1);
                              }}
                            >
                              ›
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                  <section className="table_body">
                    <div className="table-title in_modal">
                      <div className="row">
                        <div className="col-sm-4">
                          <h2>
                            <b> Chi tiết hóa đơn</b>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead style={{backgroundColor:"#145f3d",color:"#fff"}}>
                        <tr>
                          <th>STT</th>
                          <th>Sản phẩm</th>
                          <th>Tên Sản phẩm</th>
                          <th>Chất liệu</th>
                          <th>Size</th>
                          <th>Giá sản phẩm</th>
                          <th>Số lượng</th>
                          <th>Tổng tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {details &&
                          details.map((dt, index) => (
                            <tr key={index}>
                              <td> {index + 1} </td>

                              <td>
                                <img
                                  src={dt.productId.img}
                                  alt=""
                                  style={{ width: "100px" }}
                                />
                              </td>

                              <td>{dt.productId.productName}</td>
                              <td>{dt.productId.material} </td>
                              <td> {dt.productId.size}</td>
                              <td>
                                <CurrencyFormat
                                  value={dt.productId.price}
                                ></CurrencyFormat>{" "}
                                VNĐ
                              </td>
                              <td>{dt.quantityOrderDetail} </td>
                              <td>
                                <CurrencyFormat
                                  value={
                                    dt.productId.price * dt.quantityOrderDetail
                                  }
                                ></CurrencyFormat>{" "}
                                VNĐ
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {details.totalPages > 1 ? (
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="ps-pagination">
                          <ul className="pagination justify-content-center">
                            {page > 0 && (
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  rel="noindex, nofollow"
                                  onClick={() => {
                                    prevPage();
                                    setActivePage(page - 1);
                                  }}
                                >
                                  ‹
                                </a>
                              </li>
                            )}
                            {Array.from(
                              { length: details.totalPages },
                              (_, index) => (
                                <li
                                  key={index}
                                  className={`page-item${
                                    activePage === index ? " active" : ""
                                  }`}
                                >
                                  <a
                                    className="page-link"
                                    rel="noindex, nofollow"
                                    onClick={() => {
                                      setPage(index);
                                      setActivePage(index);
                                    }}
                                  >
                                    <sub>{index + 1}</sub>
                                  </a>
                                </li>
                              )
                            )}
                            {page < details.totalPages - 1 && (
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  rel="noindex, nofollow"
                                  onClick={() => {
                                    nextPage();
                                    setActivePage(page + 1);
                                  }}
                                >
                                  ›
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </section>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
