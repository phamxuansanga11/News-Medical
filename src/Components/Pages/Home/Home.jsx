import React from "react";
import CovidItem from "./CovidItem/CovidItem";
import { useState, useEffect } from "react";

function Home(props) {
  const [contentCovid, setContentCovid] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        "https://6295d393810c00c1cb68a007.mockapi.io/contect-covid"
      );
      const data = await api.json();
      setContentCovid(data);
    };
    getData();
  }, []);
  return (
    <div className="covid__content">
      {contentCovid.map((data, idx) => {
        return <CovidItem key={idx} data={data} />;
      })}
    </div>
  );
}

export default Home;
