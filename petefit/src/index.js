import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Rank from "./components/Rank";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <App />
    <Rank />
    <Footer />
  </>
);
