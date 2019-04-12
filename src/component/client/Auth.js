//This component is to render login and register page.


import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap'
import "./Auth.css"

class  Auth extends Component {



    handleLogout =()=> {
        this.props.logoutUser();
    }

    handleLogin =()=> {
        this.props.loginUser();
        this.props.history.push(`/Home`);
    }

    render() {
        console.log(this.props)
        return (
        <div>
            <Container fluid>
                <Row className="auth-header">
                    <Col className='title' > Login </Col>
                </Row>   
            </Container>
            <Container className="auth-body">
            <Button onClick={this.handleLogin}>Login</Button>

            </Container>
        </div>
    );
  }
}

export default Auth;