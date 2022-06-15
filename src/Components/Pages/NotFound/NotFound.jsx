import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound(props) {
  return (
    <>
      <div className="not__found">
        <p>Not Found! 404 error</p>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
}

export default NotFound;
