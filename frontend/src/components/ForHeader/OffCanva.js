import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function OffCanva() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>Menu</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="list-group">
            <Link to="/" className="link-no">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Graph
              </li>
            </Link>
            <Link to="/" className="link-no">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Schedule
              </li>
            </Link>
            <Link to="/" className="link-no">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Calendar
              </li>
            </Link>
            <Link to="/" className="link-no">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Recommendations
              </li>
            </Link>
            <Link to="/todo" className="link-no">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                To-Do List
              </li>
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanva;
