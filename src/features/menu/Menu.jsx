import React from 'react';
import './Menu.scss';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <>
      <Navbar className='menu' expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Asahi Shodo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='menuButton'/>
          <Navbar.Collapse id="basic-navbar-nav" className='menuButton'>
            <Nav className="me-auto">
              <Nav.Link href="student">Student</Nav.Link>
              <Nav.Link href="tuition">Tuition</Nav.Link>
              <Nav.Link href="classroom">Classroom</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;