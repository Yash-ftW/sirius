import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import Weather from "./ForHeader/Weather";
import Time from "./ForHeader/Time";
import OffCanva from "./ForHeader/OffCanva";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
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
              <Weather className="pe-none" />
            </Navbar.Text>
          </Navbar.Collapse>

          <LinkContainer to="/login" style={{ color: "white" }}>
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
