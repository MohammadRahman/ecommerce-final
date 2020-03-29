import React from "react";
import "./collectionPreview.scss";
import  ItemsPreview  from "../ItemsPreview/ItemsPreview";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((item, ind) => ind < 4)
          .map(item => (
            <ItemsPreview key={item.id} item={item}></ItemsPreview>
          ))}
      </div>
    </div>
  );
};
