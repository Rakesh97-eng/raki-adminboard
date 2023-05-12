import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/dashboard/dashboard";
import { NavcontextProvider } from "./context/navcontext";
import Conversion from "./conversion/conversion";
import { Provider } from "react-redux";
import { ApiStore } from "./redux/apistore";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(ApiStore);
root.render(
  <Provider store={ApiStore}>
  <NavcontextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="files" element={<Conversion />} />
      </Routes>
    </BrowserRouter>{" "}
  </NavcontextProvider>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
