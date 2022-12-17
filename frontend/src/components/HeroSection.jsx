import React from "react";
import Button from "./Button";

import "./HeroSection.css";

import Vid1 from "../videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={Vid1} autoPlay loop muted />
      <h1>SIRIUS</h1>
      <p>Student Evaluation System</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="login"
        >
          LOGIN <i class="fa-solid fa-right-to-bracket"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/about"
        >
          ABOUT US <i class="fa-solid fa-circle-info"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
