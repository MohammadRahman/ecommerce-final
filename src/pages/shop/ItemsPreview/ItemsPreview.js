import React from "react";
import "./itemsPreview.scss";
export const ItemsPreview = ({ id, imageUrl, name, price }) => {
  return (
    <div className="items-container">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="image-footer">
        {" "}
        <span className="name">{name} </span>
        <span className="price"> {price} </span>
      </div>
    </div>
  );
};
