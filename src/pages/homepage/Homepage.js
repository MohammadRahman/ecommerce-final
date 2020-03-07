import React from "react";
import "./homepage.scss";
import { Welcome } from "../../components/welcome/Welcome";
import { Intro } from "../../components/intro/Intro";

export const Homepage = () => {
  return (
    <div className="homepage-container">
      <Welcome></Welcome>
      <Intro></Intro>
    </div>
  );
};
