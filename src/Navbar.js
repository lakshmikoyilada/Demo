import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#action2">Role Based</Nav.Link>
            <Nav.Link href="#action2">Course Based</Nav.Link>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Cheat Codes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Road Maps
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                You Tube Videos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Button variant="outline-success">Login</Button>
        <Button variant="outline-success">Sign Up</Button>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
