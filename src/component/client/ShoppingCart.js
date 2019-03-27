import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./Style.css"

class  ShoppingCart extends Component {


  clearCart=()=>{
    this.props.clearCart()
  }


  render() {
    console.log(this.props)
    return (
      <div>
            <Container fluid>
                <Row className="cart-header">
                    <Col className='title' > Shopping Cart</Col>
                </Row>

                <Row>
                    <Button onClick={this.clearCart}>Clear all</Button>  
                </Row>   
            </Container>

      </div>
    );
  }
}

export default ShoppingCart;