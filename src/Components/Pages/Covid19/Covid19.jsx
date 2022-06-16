import React from "react";
import { useState, useEffect } from "react";
import Covid19Item from "./Covid19Item/Covid19Item";
import "./Covid19.scss";

function Covid19({ params }) {
  const [covid19Content, setCovid19Content] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        `https://6295d393810c00c1cb68a007.mockapi.io/${params}`
      );
      const data = await api.json();
      setCovid19Content(data);
      console.log(data);
    };
    getData();
  }, [params]);
  return (
    <div className="covid19__content">
      {covid19Content.map((data) => {
        return <Covid19Item key={data.id} data={data} />;
      })}
    </div>
  );
}

export default Covid19;
