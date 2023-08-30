import { Link } from "react-router-dom";
import "../cart.css";
import image1 from "../image1.png";
import image2 from "../image2.png";
import image3 from "../image3.png";
export default function ShoppingCart() {
  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Giỏ Hàng</h1>
                          <h6 className="mb-0 text-muted">Sản Phẩm</h6>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={image1}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Rolex</h6>
                            <h6 className="text-black mb-0">Daydate</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-4 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0" style={{ width: "400px" }}>
                              344.000.000 VNĐ
                            </h6>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={image2}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Rolex</h6>
                            <h6 className="text-black mb-0">1908</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-4 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0" style={{ width: "400px" }}>
                              550.000.000 VNĐ
                            </h6>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={image3}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Rolex</h6>
                            <h6 className="text-black mb-0">GMT II</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button
                              className="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-4 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0" style={{ width: "400px" }}>
                              280.000.000 VNĐ
                            </h6>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to={"/rolex-world"} className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2" />
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 bg-grey"
                      style={{ borderRadius: "0px 15px 15px 0px" }}
                    >
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Chi Tiết</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5
                            className="text-uppercase"
                            style={{ width: "300px" }}
                          >
                            3 Sản phẩm
                          </h5>
                          <h5>1.174.000.000 VNĐ</h5>
                        </div>
                        <h5 className="text-uppercase mb-3">Giao Hàng</h5>
                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value={1}>
                              Standard-Delivery- 10.000.000 VNĐ
                            </option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                          </select>
                        </div>

                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5
                            className="text-uppercase"
                            style={{ width: "300px" }}
                          >
                            Tổng Tiền
                          </h5>
                          <h5>1.175.000.000 VNĐ</h5>
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Thanh Toán
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
