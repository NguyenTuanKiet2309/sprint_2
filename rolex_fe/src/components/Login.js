import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login-register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8080/account/login",
        values
      );
      const token = response.data.token;
      

      // Save token to Local Storage
      localStorage.setItem("token", token);
      localStorage.setItem("username", response.data.name)
      // Reset form values
      setSubmitting(false);
      navigate("/rolex-world")
    } catch (error) {
      // Handle error
      console.log(error);
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{
        username: "",
        passwords: "",
      }}
      validationSchema={yup.object({
        username: yup
          .string()
          .required("Chưa nhập email đăng nhập.")
          .email("Chưa đúng định dạng email: xxx@xxx.xxx")
          .min(6, "Ít nhất 6 ký tự.")
          .max(50, "Tối đa 50 ký tự."),

        passwords: yup
          .string()
          .required("Chưa nhập mật khẩu.")
          // .matches(
          //   /^(?=.*[A-Z])(?=.*[0-9]).{8,20}$/,
          //   "Mật khẩu phải từ 8 ký tự và ít hơn 20 ký tự, có chứa ký tự in hoa và ký tự số"
          // ),
      })}
      onSubmit={handleSubmit}
    >
      <div className="main">
        <Form className="form" id="form-2">
          <h3 className="heading" style={{ color: "#bd916f" }}>
            Đăng nhập
          </h3>
          <p className="desc">Cảm ơn bạn đã đồng hành cùng chúng tôi ❤️</p>
          <div className="spacer" />
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="VD: email@domain.com"
              className="form-control"
            />
            <ErrorMessage
              className="form-message"
              component="span"
              name="username"
              style={{ color: "red" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwords" className="form-label">
              Mật khẩu
            </label>
            <Field
              id="passwords"
              name="passwords"
              type="password"
              placeholder="Nhập mật khẩu"
              className="form-control"
            />
            <ErrorMessage
              className="form-message"
              component="span"
              name="passwords"
              style={{ color: "red" }}
            />
          </div>
          <button type="submit" className="form-submit">
            Đăng nhập
          </button>
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
        </Form>
      </div>
    </Formik>
  );
}