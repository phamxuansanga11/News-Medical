import React from "react";
import Header from "../../Components/Core/Header/Header";
import Categories from "../../Components/Core/Sidebar/categories/Categories";
import "./LayoutHeader.scss";

function LayoutHeader(props) {
  return (
    <div className="layout__header">
      <Header />
      <div className="wrapper__content-layout-header">
        <div className="wrapper"></div>
        <Categories />
      </div>
    </div>
  );
}

export default LayoutHeader;
