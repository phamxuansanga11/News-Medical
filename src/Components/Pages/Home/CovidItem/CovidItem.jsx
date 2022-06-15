import React from "react";
import { Link } from "react-router-dom";
import "./CovidItem.scss";

function CovidItem({ data }) {
  console.log(data);
  return (
    <div className="covid__item">
      <div className="covid__item-img">
        <img src={data.img} alt="" />
      </div>
      <h2 className="covid__item-title">{data.title}</h2>
      <div className="covid__item-author__date">
        <div className="author">
          <img src={data.avatar} alt="" />
          <p className="name">{data.author}</p>
        </div>
        <div className="date">
          <i>
            <img src="" alt="" />
          </i>
          <p className="day">{data.date}</p>
        </div>
      </div>
      <p className="covid__item-text">{data.text}</p>
      <Link to={`/content/${data.id}`} className="covid__item-btn__readmore">
        <p>Continue Reading</p>
      </Link>
    </div>
  );
}

export default CovidItem;
