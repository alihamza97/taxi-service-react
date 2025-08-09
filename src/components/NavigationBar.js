import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar bg="white" variant="light" expand="lg" sticky="top" className="shadow-sm py-2">
      <Container>
        <a href="#hero" className="navbar-brand d-flex align-items-center gap-2">
          <img src="https://img.icons8.com/ios-filled/50/000000/taxi.png" alt="Taxi Logo" width="36" height="36" style={{marginRight: 8}} />
          <span className="fw-bold fs-4" style={{letterSpacing: '1px'}}>Taxi Service</span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="fw-semibold">Services</Nav.Link>
            <Nav.Link as={Link} to="/fleet" className="fw-semibold">Fleet</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-semibold">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-semibold">Contact</Nav.Link>
            <Link to="/booking" className="btn btn-warning fw-bold ms-3 px-4 py-2 rounded-pill shadow-sm">Book Now</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
