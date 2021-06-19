import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import MyRoute from "./component/router_test/route"
ReactDOM.render(
  <React.StrictMode>
    <MyRoute />
  </React.StrictMode>,
=======
import App from "./App";
import AuthStore from "./store/authStore";
ReactDOM.render(
  <AuthStore>
    <App />
  </AuthStore>,
>>>>>>> a1a7adadfc40918040081215758e34617ba763ca
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
