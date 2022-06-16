import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../../img/Logo.medicalnews.png";

function Header(props) {
  return (
    <div className="wrapper__header">
      <div className="header">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
          <h1 className="name__website">Medical News</h1>
        </Link>
        <div className="menu">
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

export default Header;
