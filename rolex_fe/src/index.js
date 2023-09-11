import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsProduct from "./components/DetailsProduct";
import ShoppingCart from "./components/ShoppingCart";
import Register from "./components/Register";
import Product from "./components/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/rolex-world" element={<HomePage />}></Route>
        <Route path="/rolex-world/login" element={<Login />}></Route>
        <Route path="/rolex-world/details" element={<DetailsProduct />}></Route>
        <Route path="/rolex-world/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/rolex-world/register" element={<Register />}></Route>
        <Route path="/rolex-world/products/list" element={<Product />}></Route>
        <Route path="/rolex-world/products/typeProduct" element={<Product />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
