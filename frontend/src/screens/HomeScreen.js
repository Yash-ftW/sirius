import React from "react";
import { Container } from "react-bootstrap";

import Img1 from "../images/logo.png";
import Img2 from "../images/logo.png";

function HomeScreen() {
  return (
    <Container>
      <div className="banner">
        <h1>SIRUS</h1>
        <h3>Student Evaluation System</h3>
      </div>
      <div className="features">
        <div className="feature feature-1">
          <h2>Report Prediction</h2>
        </div>
        <div className="feature feature-2">
          <img src={Img1} alt="Feature1" />
        </div>
        <div className="feature feature-3">
          <h2>Student Evalutaion</h2>
        </div>
        <div className="feature feature-4">
          <img src={Img2} alt="Feature2" />
        </div>
      </div>
    </Container>
  );
}

export default HomeScreen;
