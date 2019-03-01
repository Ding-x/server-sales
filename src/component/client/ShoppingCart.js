import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./ShoppingCart.css"

class  ShoppingCart extends Component {
  render() {
    return (
      <div>
            <Container fluid>
                <Row className="cart-header">
                    <Col className='title' > Shopping Cart</Col>
                </Row>   
            </Container>

      </div>
    );
  }
}

export default ShoppingCart;