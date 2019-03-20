import React, { Component } from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'

class Header extends Component {

    handleLogout =()=> {
        this.props.logoutUser();
        this.props.history.push(`/Auth`);
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                        <Navbar.Brand href="#Home">Managed Hosting Online Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            </Nav>
                            
                            {this.props.auth.user===null?
                                null
                                :
                                <Nav>
                                    <Nav.Link href="#Dashboard"><Button variant="info">{this.props.auth.user.username}</Button></Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes"><Button variant="secondary" onClick={this.handleLogout}>Logout</Button> </Nav.Link>
                                </Nav>
                            }
                                
                        </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default Header;