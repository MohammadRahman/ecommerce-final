import React from "react";
import "./welcome.scss";
import { CustomButton } from "../buttons/CustomButton";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* <h1>Software Development Project</h1> */}
      <div className="image-container">
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className="content">
        <Link to="/Wiki" className="button">
          {/* <CustomButton name="learn more"></CustomButton> */}
          WIKI
        </Link>

        <CustomButton name="learn more"></CustomButton>
      </div>
    </div>
  );
};
