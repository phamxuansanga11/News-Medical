import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
import Categories from "../../Components/Core/Sidebar/categories/Categories";
import Covid19 from "../../Components/Pages/Covid19/Covid19";
import "./LayoutHeader.scss";

function LayoutHeader(props) {
  const { page } = useParams();
  return (
    <div className="layout__header">
      <Header />
      <div className="wrapper__content-layout-header">
        <Covid19 params={page} />
        <Categories />
      </div>
    </div>
  );
}

export default LayoutHeader;
