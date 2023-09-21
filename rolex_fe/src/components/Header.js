import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCart, getCount } from "../store/action/CartAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { totalProductOnCart } from "../services/CartService";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thêm state để theo dõi trạng thái đăng nhập
  const [username, setUsername] = useState(localStorage.getItem("username")); // Thêm state để lưu trữ tên người dùng
  // const [name, setName] = useState("");
  const [numProduct, setNumProduct] = useState(0);
  const numberOfProductsInCart = useSelector(getCart);
  const getCountCheck = useSelector(getCount);
  const dispatch = useDispatch();
  const resetCart = useState(localStorage.getItem("resetCart"));
  // Hàm xử lý logout
  const handleLogout = async () => {
    // Xóa token khỏi Local Storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // Reset trạng thái đăng nhập và tên người dùng
    setIsLoggedIn(false);
    setUsername("");
    // setName = "";
    Swal.fire({
      title: "Đăng xuất thành công",
      icon: "success",
      reverseButtons: true,
    });
    // Điều hướng về trang đăng nhập
  };
  const checkPaid = async () => {
    if (resetCart == 0) {
      setNumProduct(0);
      localStorage.removeItem("resetcart");
    }
  };
  // Kiểm tra trạng thái đăng nhập
  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      // Lấy tên người dùng từ token hoặc từ API nếu có
      const usernameFromToken = localStorage.getItem("username"); // Thay bằng phương thức lấy tên người dùng từ token hoặc API
      setUsername(usernameFromToken);
    }
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
  // Kiểm tra trạng thái đăng nhập khi thành phần được render
  useEffect(() => {
    checkLoggedIn();
    checkPaid();
    getToltalProductOnCart();
    setUsername(localStorage.getItem("username"));
  }, [location, numProduct]);
  return (
    <>
      <header className="header_section sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <NavLink
              className="navbar-brand"
              to="/rolex-world"
              style={{ position: "relative", right: "70px" }}
            >
              <img
                src="../Bc (7).png"
                alt="Rolex world"
                style={{ height: "70px", width: "70px" }}
              ></img>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ position: "relative", right: "80px" }}
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center nav-edit">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <NavLink to="/rolex-world" className="nav-link">
                      {" "}
                      Trang Chủ
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      // to={`/rolex-world/products/typeProduct?page=0&&typeId=2`}
                    >
                      {" "}
                      Về Chúng Tôi{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/rolex-world/FAQs`}>
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/rolex-world/FAQs`}>
                      {" "}
                      Tin Tức{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul
                className="navbar-nav  "
                style={{ position: "relative", left: "130px" }}
              >
                <li className="nav-item logined">
                  {isLoggedIn ? (
                    <>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="button-user"
                        >
                          <span
                            style={{
                              fontSize: "15px",
                              paddingRight: "5px",
                              color: "#fff",
                              position: "relative",
                              bottom: "5px",
                            }}
                          >
                            Xin chào, {username}
                          </span>
                          <i
                            className="fa-solid fa-user"
                            style={{
                              color: "#dcbf98",
                              fontSize: "30px",
                              paddingTop: "10px",
                            }}
                          ></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <NavLink
                              style={{ color: "black" }}
                              to={"/rolex-world/user/profile"}
                            >
                              Thông tin của bạn
                            </NavLink>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <NavLink
                              style={{ color: "black" }}
                              to={"/rolex-world/history-order"}
                            >
                              Lịch sử mua hàng
                            </NavLink>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <NavLink
                              style={{ color: "black" }}
                              to={"/rolex-world"}
                              onClick={async () => {
                                await handleLogout();
                              }}
                            >
                              Đăng xuất
                            </NavLink>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  ) : (
                    <NavLink to="/rolex-world/login" className="nav-link">
                      <i
                        className="fa-solid fa-user"
                        style={{ color: "#dcbf98", fontSize: "30px" }}
                      ></i>
                    </NavLink>
                  )}
                </li>
                <li className="nav-item">
                  <NavLink to="/rolex-world/shopping-cart" className="nav-link">
                    <div className="vertical-line"></div>
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: "#dcbf98", fontSize: "30px" }}
                    ></i>
                    <span className="cart-number">
                      {getCountCheck == 0 ? numProduct : numberOfProductsInCart}
                      {/* {numProduct} */}
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
