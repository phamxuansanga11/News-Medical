import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Core/Header/Header";
import Sidebar from "../../Components/Core/Sidebar/Sidebar";
import ContentDetail from "../../Components/Pages/ContentDetail/ContentDetail";
import "./LayoutOther.scss";

function LayoutOther(props) {
  const { id } = useParams();
  console.log(id);
  const [dataDetail, setDataDetail] = useState({});
  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        `https://6295d393810c00c1cb68a007.mockapi.io/contect-covid/${id}`
      );
      const data = await api.json();
      setDataDetail(data);
    };
    getData();
  }, [id]);
  console.log(dataDetail);
  return (
    <div className="layout__other">
      <Header />
      <div className="wrapper__content-layout__other">
        <div className="content">
          <ContentDetail dataDetail={dataDetail} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default LayoutOther;
