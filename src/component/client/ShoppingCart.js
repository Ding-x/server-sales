import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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

                {/* <Row>
                    <Col className='title' > <Button onClick={this.clearCart}>Clear all</Button>  </Col>
                    
                </Row>    */}

                <Row className="cart-content">
                    <Col>
                        {this.props.cart?
                          this.props.cart.map((combo,index)=>{
                          return(
                            <div key={index} className="cart-content-frame">
                              <Row className="cart-content-row" >
                                <Col className="cart-content-col" xs={2}>
                                  <Row>{combo.title}</Row>
                                </Col>
                                <Col className="cart-content-col" xs={7}>
                                  <Row>{combo.detail}</Row>
                                </Col>
                                <Col className="cart-content-col" xs={2}><Button className="cart-content-btn" onClick={this.handleJumpToAddition.bind(this,combo.id)}>Customize</Button></Col>
                                <Col className="cart-content-col" xs={1}><Button variant="secondary" className="cart-content-btn" onClick={this.deleteAnItem.bind(this,index)}>Delete</Button></Col>
                              </Row>

                              <Row>
                                {combo.servers?
                                  combo.servers.map((server,index1)=>{
                                    var total = parseFloat(combo.price)
                                    for(let option of server.option){
                                        if(option.value)
                                            total+=parseFloat(option.value*option.price)
                                        if(option.index && option.index>=0)
                                            total+=parseFloat(option.options[option.index].price)
                                    }

                                    return(
                                      <Col key={index1}>
                                        <Card  className="combo">
                                        <Card.Header>{server.name}</Card.Header>
                                            <Card.Body>
                                                {server.option.map((item, index2)=>{
                                                  if(item.value>0)
                                                    return(
                                                        <p key={index2}>{item.name} {item.value} {item.unit}</p>
                                                    )
                                                  if(item.error===false)
                                                    return(
                                                      <p key={index2}>{item.name} {item.options[item.index].name}</p>
                                                    )
                                                }
                                                )}

                                            </Card.Body>
                                        <Card.Footer>${total.toFixed(2)}</Card.Footer>
                                        </Card>
                                      </Col>
                                    )
                                  })
                                :
                                null}
                              </Row>
                            </div>

                          )
                      
                        })
                      :
                      null}
                    </Col>

                </Row>

                <Row className="cart-footer">
                    <Col className="cart-footer-func"> <Button size="lg">Back</Button></Col>
                    <Col className="cart-footer-func"> <Button size="lg" onClick={this.clearCart}>Empty Cart</Button></Col>
                    <Col className="cart-footer-func"> <Button size="lg">Submit</Button></Col>
                </Row>
            </Container>

      </div>
    );
  }
}

export default ShoppingCart;