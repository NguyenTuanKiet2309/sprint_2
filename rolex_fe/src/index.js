import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
import ErrorPage from "./components/Error";
import { Provider } from "react-redux";
import { store } from "./store/store";
import FAQs from "./components/FAQs";
import PayPage from "./components/PayPage";
import ReturnPage from "./components/ReturnPage";
import PayProductPage from "./components/PayProductPage";
import HistoryOrder from "./components/HistoryOrder";
import ProfilePage from "./components/ProfilePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/rolex-world" element={<HomePage />}></Route>
          <Route path="/rolex-world/login" element={<Login />}></Route>
          <Route
            path="/rolex-world/details/:productId/:categoryId"
            element={<DetailsProduct />}
          ></Route>
          <Route
            path="/rolex-world/shopping-cart"
            element={<ShoppingCart />}
          ></Route>
          <Route path="/rolex-world/register" element={<Register />}></Route>
          <Route
            path="/rolex-world/products/list"
            element={<Product />}
          ></Route>
          {/* <Route
            path="/rolex-world/products/typeProduct"
            element={<Product />}
          ></Route> */}
          <Route
            path="/rolex-world/products/list/asc"
            element={<Product />}
          ></Route>
          <Route
            path="/rolex-world/products/list/desc"
            element={<Product />}
          ></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
          <Route path="/rolex-world/check-out" element={<PayPage />}></Route>
          <Route
            path="/rolex-world/check-out-product/:productId/:categoryId"
            element={<PayProductPage />}
          ></Route>
          <Route path="/rolex-world/FAQs" element={<FAQs />}></Route>
          <Route path="/return" element={<ReturnPage />}></Route>
          <Route path="/rolex-world/history-order" element={<HistoryOrder />}></Route>
          <Route path="/rolex-world/user/profile" element={<ProfilePage/>}></Route>
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
