import React from "react";
import "./RecentPost.scss";

function RecentPost(props) {
  return (
    <div className="recent__posts">
      <div className="recent__posts-title">
        <h2>Recent Posts</h2>
      </div>
      <div className="recent__posts-content">
        <div className="item">
          <div className="item__img">
            <img
              src="https://media.graphassets.com/f5JIs345TNyuLT9MpmO5"
              alt=""
            />
          </div>
          <div className="item__text">
            <p className="date">Feb 01, 2022</p>
            <p className="text">
              Đại dịch Covid-19 chưa đến lúc Endgame đâu, WHO cảnh báo
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item__img">
            <img
              src="https://media.graphassets.com/f5JIs345TNyuLT9MpmO5"
              alt=""
            />
          </div>
          <div className="item__text">
            <p className="date">Feb 01, 2022</p>
            <p className="text">
              Đại dịch Covid-19 chưa đến lúc Endgame đâu, WHO cảnh báo
            </p>
          </div>
        </div>
        <div className="item">
          <div className="item__img">
            <img
              src="https://media.graphassets.com/f5JIs345TNyuLT9MpmO5"
              alt=""
            />
          </div>
          <div className="item__text">
            <p className="date">Feb 01, 2022</p>
            <p className="text">
              Đại dịch Covid-19 chưa đến lúc Endgame đâu, WHO cảnh báo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
