import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./ShoppingCart.css"

class  ShoppingCart extends Component {


  clearCart=()=>{
    this.props.clearCart()
  }

  handleJumpToAddition(id){
    this.props.history.push('Addition/'+id)
  }

  deleteAnItem(id){
    this.props.deleteFromCart(id)
  }



  render() {
    console.log(this.props)
    return (
      <div>
            <Container fluid>
                <Row className="cart-header">
                    <Col className='title' > Shopping Cart</Col>
                </Row>
{/* 
                <Row>
                    <Col className='title' > <Button onClick={this.clearCart}>Clear all</Button>  </Col>
                    
                </Row>    */}

                <Row className="cart-content">
                    <Col>
                        {this.props.cart.map((combo,index)=>{
                          return(
                            <Row className="cart-content-row" key={index}>
                              <Col className="cart-content-col" xs={2}>{combo.title}</Col>
                              <Col className="cart-content-col" xs={6}>{combo.detail}</Col>
                              <Col className="cart-content-col" xs={1}>{combo.price}</Col>
                              <Col className="cart-content-col" xs={2}><Button className="cart-content-btn" onClick={this.handleJumpToAddition.bind(this,combo.id)}>Customize</Button></Col>
                              <Col className="cart-content-col" xs={1}><Button variant="secondary" className="cart-content-btn" onClick={this.deleteAnItem.bind(this,index)}>Delete</Button></Col>
                            </Row>
                          )
                        })}
                    </Col>

                </Row>
            </Container>

      </div>
    );
  }
}

export default ShoppingCart;