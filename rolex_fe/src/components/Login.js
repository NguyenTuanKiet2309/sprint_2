import React from "react";
import { Link } from "react-router-dom";
import "../login-register.css";
import facebook from "../facebook.png";
import google from "../google.png";
export default function Login() {
  return (
    <div className="main">
      <form action="" method="POST" className="form" id="form-2">
        <h3 className="heading">Đăng nhập</h3>
        <p className="desc">
          Cảm ơn bạn luôn đồng hành cùng chúng tôi ❤️
        </p>
        <div className="spacer" />
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
            className="form-control"
          />
          <span className="form-message" style={{color:"red"}}>Email không hợp lệ</span>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="form-control"
          />
          <span className="form-message" />
        </div>
        <button className="form-submit">Đăng nhập</button>
        <div className="confirm-login">
          <Link to="/forgot-password" className="link">
            Quên mật khẩu ?
          </Link>
        </div>
        <div className="confirm-register">
          <span style={{ marginRight: "5px" }}>Bạn chưa có tài khoản?</span>
          <Link to="/rolex-world/register" className="link">
            Đăng kí thành viên mới
          </Link>
        </div>
        
      </form>
    </div>
  );
}
