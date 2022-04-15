import React from "react";
import Nav from "react-bootstrap/Nav"; 
import Navbar from "react-bootstrap/Navbar"; 
import Container from "react-bootstrap/Container"; 

const NavbarComponent = () => {
    
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RaftLab Assignment</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
