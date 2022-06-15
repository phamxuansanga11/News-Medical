import React from "react";
import "./SliderItem.scss";

function SliderItem({ img, avatar, param, date, author }) {
  return (
    <div className="slider__home-item">
      <img src={img} alt="" />
      <div className="content">
        <span>{date}</span>
        <p className="text__content">{param}</p>
        <div className="author">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="name">
            <p>{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
