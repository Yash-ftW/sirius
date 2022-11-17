import React, { useState } from "react";
import {
  Navbar,
  Container,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Weather from "./Weather";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutHandler = () => {
    alert("Logout");
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
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
                    Details
                  </li>
                </Link>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          {/* <Link to="/">
            <img
              src={require("../images/logo.png")}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </Link> */}

          <LinkContainer to="/">
            <Navbar.Brand>Sirius</Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Weather />
            </Navbar.Text>
          </Navbar.Collapse>

          <NavDropdown title="Student Name" id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
