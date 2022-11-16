import React, { useState } from "react";
import { Navbar, Container, Button, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Button variant="dark" onClick={handleShow}>
            <i className="fa-solid fa-bars"></i> Menu
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

          <Navbar.Collapse className="justify-content-end">
            <LinkContainer to="/">
              <Navbar.Brand>Sirius</Navbar.Brand>
            </LinkContainer>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="/">User</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
