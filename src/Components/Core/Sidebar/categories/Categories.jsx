import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories(props) {
  return (
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
  );
}

export default Categories;
