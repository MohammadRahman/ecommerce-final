import React from "react";
import "./button.scss";

export const CustomButton = ({ name }) => {
  return (
    <div className="button">
      <button>{name}</button>
    </div>
  );
};
