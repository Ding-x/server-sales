import React, { Component } from 'react';
import {Navbar, Nav } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <div>
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Navbar.Brand href="#Home">Managed Hosting Online Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes"> Dank memes </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </div>
    );
  }
}

export default Header;