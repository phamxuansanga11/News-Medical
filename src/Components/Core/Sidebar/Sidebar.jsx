import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <div className="sidebar">
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
      <div className="categories">
        <div className="categories__title">
          <h2>Categories</h2>
        </div>
        <div className="categories__menu">
          <ul>
            <li>
              <Link to="/covid19">COVID-19</Link>
            </li>
            <li>
              <Link to="/thietbiyte">Thiết bị y tế</Link>
            </li>
            <li>
              <Link to="/foru">ForU</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
