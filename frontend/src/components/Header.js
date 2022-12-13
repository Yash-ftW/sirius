import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import Weather from "./ForHeader/Weather";
import Time from "./ForHeader/Time";
import OffCanva from "./ForHeader/OffCanva";

function Header() {
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect className="navbar">
        <Container>
          <OffCanva />
          <LinkContainer to="/">
            <Navbar.Brand className="px-2">SIRIUS</Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse className="justify-content-end px-5">
            <Navbar.Text className="px-3">
              <Time style={{ cursor: "none" }} />
            </Navbar.Text>
            <Navbar.Text>
              <Weather />
            </Navbar.Text>
          </Navbar.Collapse>

          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fas fa-user px-2"></i>Login
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
