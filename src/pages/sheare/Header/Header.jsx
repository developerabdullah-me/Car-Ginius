
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
         
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Car-Genius</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>
    );
};

export default Header;