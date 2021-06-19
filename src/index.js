import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AdminHome from "./config-product/admin-home-page";
import App from "./App";
import AuthStore from "./store/authStore";
import ContentProduct from "./component/product/content/contentProduct"
import ContentHome from "./component/product/content/contentHome"
import HeaderProduct from "./component/product/header/headerProduct"
import HeaderHome from "./component/product/header/headerHome"
import Footer from "./component/product/footer/footer"
ReactDOM.render(
  // <React.StrictMode>
  //   {/* <HeaderHome/> */}
  //   {/* <ContentHome/> */}
  //   {/* <HeaderProduct/>
  //   <ContentProduct />
  //   <Footer/> */}
  // </React.StrictMode>,
  <AuthStore>
    <App />
  </AuthStore>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
