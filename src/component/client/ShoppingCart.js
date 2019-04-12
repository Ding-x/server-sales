//This component is to render shopping cart page.


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

  goBack=()=>{
    this.props.history.push("/Services")
  }

  handleSubmit=()=>{
    var errorMess=""
    for(let combo of this.props.cart){
      if(combo && !combo.servers){
        errorMess+=combo.type+": "+combo.title+", has not been customized"+"\n"
      }
    }
    if(errorMess.length>0)
      alert(errorMess)

  }



  render() {
    console.log(this.props)

    var totalPrice =0;

    return (
      <div>
            <Container fluid>
                <Row className="cart-header">
                    <Col className='title' > Shopping Cart</Col>
                </Row>

                <Row className="cart-content">
                    <Col>
                        {this.props.cart?
                          this.props.cart.map((combo,index)=>{
                            if(combo)
                          return(
                            <div key={index} className="cart-content-frame">
                              <Row className="cart-content-row" >
                                <Col className="cart-content-col" xs={2}>
                                  <Row>{combo.title}</Row>
                                </Col>
                                <Col className="cart-content-col" xs={7}>
                                  <Row>{combo.detail}</Row>
                                </Col>
                                <Col className="cart-content-col" xs={2}><Button variant="outline-primary" className="cart-content-btn" onClick={this.handleJumpToAddition.bind(this,combo.id)}>Customize</Button></Col>
                                <Col className="cart-content-col" xs={1}><Button variant="secondary" className="cart-content-btn" onClick={this.deleteAnItem.bind(this,index)}>Delete</Button></Col>
                              </Row>

                              <Row>
                                {combo.servers?
                                  combo.servers.map((server,index1)=>{
                                    var serverPrice = parseFloat(combo.price)
                                    for(let option of server.option){
                                        if(option.value)
                                        serverPrice+=parseFloat(option.value*option.price)
                                        if(option.index && option.index>=0)
                                        serverPrice+=parseFloat(option.options[option.index].price)
                                    }

                                    totalPrice+=serverPrice

                                   
                                    return(
                                   
                                        <Card  key={index1} className="combo">
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
                                        <Card.Footer>${serverPrice.toFixed(2)}</Card.Footer>
                                        </Card>
                                  
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

                <Row className="cart-price">
                   Total Price: ${totalPrice.toFixed(2)}
                </Row>

                <Row className="cart-footer">
                    <Col className="cart-footer-func"> <Button variant="dark" size="lg" onClick={this.goBack}>BACK</Button></Col>
                    <Col className="cart-footer-func"> <Button variant="secondary" size="lg" onClick={this.clearCart}>CLEAR ALL</Button></Col>
                    <Col className="cart-footer-func"> <Button size="lg" onClick={this.handleSubmit}>SUBMIT</Button></Col>
                </Row>
            </Container>

      </div>
    );
  }
}

export default ShoppingCart;