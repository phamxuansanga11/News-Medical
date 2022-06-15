import React from "react";
import "./Layout.scss";
import Header from "../Components/Core/Header/Header";
import Sidebar from "../Components/Core/Sidebar/Sidebar";
import Slider from "../Components/Core/Slider/Slider";
import Home from "../Components/Pages/Home/Home";

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <Slider />
      <div className="wrapper__content">
        <Home />
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
