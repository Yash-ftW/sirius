import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

import CarouselMain from "../components/CarouselMain";

function HomeScreen() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card className="p-3 my-3 rounded">
            <CarouselMain />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 rounded my-3">
            <h1 className="d-flex justify-content-center">Sirius</h1>
            <h3 className="d-flex justify-content-center">
              The Brightest Star ok
            </h3>
            <div>
              Sirius is the brightest star in the night sky. Its name is derived
              from the Greek word Σείριος, or Seirios, meaning lit. 'glowing' or
              'scorching'. The star is designated α Canis Majoris, Latinized to
              Alpha Canis Majoris, and abbreviated Alpha CMa or α CMa. With a
              visual apparent magnitude of −1.46, Sirius is almost twice as
              bright as Canopus, the next brightest star. Sirius is a binary
              star consisting of a main-sequence star of spectral type A0 or A1,
              termed Sirius A, and a faint white dwarf companion of spectral
              type DA2, termed Sirius B. The distance between the two varies
              between 8.2 and 31.5 astronomical units as they orbit every 50
              years.
            </div>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className="my-3 p-3 rounded">
            <h2 className="d-flex justify-content-center">Features</h2>
            <div>
              <ul>
                <li>Recommendations</li>
                <li>Record Progress</li>
                <li>Built In Finals Prediction</li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 p-3 rounded">
            <h2 className="d-flex justify-content-center">About Us</h2>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 p-3 rounded">
            <h2 className="d-flex justify-content-center">Contact Us</h2>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
