import React from "react";
import RecentPost from "./recentPosts/RecentPost";
import Categories from "./categories/Categories";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <RecentPost />
      <Categories />
    </div>
  );
}

export default Sidebar;
