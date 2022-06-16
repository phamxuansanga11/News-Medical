import React from "react";
import { Link } from "react-router-dom";
import "./Covid19Item.scss";

function Covid19Item({ data }) {
  return (
    <div className="covid__item19">
      <div className="covid__item19-img">
        <img src={data.thumnail} alt="" />
      </div>
      <Link to={`/content/${data.id}`} className="covid__item19-title">
        {data.title}
      </Link>
      <div className="covid__item19-author__date">
        <div className="author">
          <img src={data.avatar} alt="" />
          <p className="name">{data.nameAuthor}</p>
        </div>
        <div className="date">
          <i>
            <img src="" alt="" />
          </i>
          <p className="day">{data.date}</p>
        </div>
      </div>
      <p className="covid__item19-text">{data.text}</p>
      <Link to={`/content/${data.id}`} className="covid__item19-btn__readmore">
        <p>Continue Reading</p>
      </Link>
    </div>
  );
}

export default Covid19Item;
