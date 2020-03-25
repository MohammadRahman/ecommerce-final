import React from "react";
import "./menuItem.scss";
export const MenuItem = ({ title, imageUrl }) => (
  <div
    className="menu-item background-image"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {/* <div className="background-image" /> */}
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);
