import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import Weather from "./ForHeader/Weather";
import Time from "./ForHeader/Time";
import OffCanva from "./ForHeader/OffCanva";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <Navbar
        expand="lg"
        collapseOnSelect
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <OffCanva />
          <LinkContainer to="/">
            <Navbar.Brand className="px-2">SIRIUS</Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse className="justify-content-end px-5">
            <Navbar.Text className="px-3">
              <Time style={{ cursor: "none" }} />
              <Weather />
            </Navbar.Text>
          </Navbar.Collapse>

          <LinkContainer to="/login" className="link-login">
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
