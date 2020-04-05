import React from "react";
import "./welcome.scss";
import { CustomButton } from "../buttons/CustomButton";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="image-container">
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className="content">
        <Link to="/Wiki" className="button">
          WIKI
        </Link>
        <Link to="/landing" className="button">
          Go to Project
        </Link>
      </div>
    </div>
  );
};
