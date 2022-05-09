import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavHashLink as Link } from "react-router-hash-link";

function NavBar() {
  return (
    <React.Fragment>
      <Container className="fluid">
        <Navbar bg="dark" variant="dark" fixed="top" className="p-2">
          <Link to="#buybtc">
            <Navbar.Brand href="#home">BUY BTC</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#whatisbtc">About</Nav.Link>
            <Nav.Link href="#buybtc">Buy BTC</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </React.Fragment>
  );
}

export default NavBar;
