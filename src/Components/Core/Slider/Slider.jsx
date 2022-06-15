import React from "react";
import { useState, useEffect } from "react";
import SliderItem from "./SliderItem/SliderItem";
import "./Slider.scss";

function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const api = await fetch(
        "https://6295d393810c00c1cb68a007.mockapi.io/data"
      );
      const data = await api.json();
      //   console.log(data);
      setSlider(data);
    };
    getData();
  }, []);
  return (
    <div className="slider__home">
      {slider.map((item) => {
        // console.log(item);
        return (
          <SliderItem
            key={item.id}
            img={item.image}
            avatar={item.avatar}
            param={item.text}
            date={item.date}
            author={item.author}
          />
        );
      })}
    </div>
  );
}

export default Slider;
