import React from "react";
import "./ContentDetail.scss";

function ContentDetail({ dataDetail }) {
  return (
    <div className="content__detailss">
      <div className="content__detailss-img">
        <img src={dataDetail.img} alt="" />
      </div>
      <div className="covid__item-author__date">
        <div className="author">
          <img src={dataDetail.avatar} alt="" />
          <p className="name">{dataDetail.author}</p>
        </div>
        <div className="date">
          <i>
            <img src="" alt="" />
          </i>
          <p className="day">{dataDetail.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentDetail;
