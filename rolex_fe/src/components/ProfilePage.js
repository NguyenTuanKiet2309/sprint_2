import { useLocation } from "react-router";
import "../profile.css";
import { useState } from "react";
import { getInfoUser } from "../services/UserService";
import { useEffect } from "react";
import moment from "moment";

export default function ProfilePage() {
  const username = localStorage.getItem("username");
  const location = useLocation();
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const data = await getInfoUser(username);
      setUser(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, [location]);
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className="breacrumb-section">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <a href="./home.html">
                  <i className="fa fa-home" /> Trang chủ
                </a>
                <a>
                  <span>Người dùng</span>
                </a>

                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div class="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
              
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <form method="post">
                <div className="row">
                  <div className="col-md-6">
                    <div className="profile-head">
                      <h5>{user.nameUser}</h5>

                      <ul
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      ></ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <label>Họ Và Tên</label>
                          </div>
                          <div className="col-md-6">
                            <p>{user.nameUser}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Địa Chỉ</label>
                          </div>
                          <div className="col-md-6">
                            <p>{user.address}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>{user.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div className="col-md-6">
                            <p>{user.phoneNumber}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Ngày Sinh</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {moment(user.dateOfBirth).format("DD/MM/YYYY")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
