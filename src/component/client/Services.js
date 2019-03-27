import React, { Component } from 'react';
import { Container, Button, Card, Row, Col, Modal } from 'react-bootstrap'
import "./Services.css"
import SCLogo from "./SCLogo"

class Services extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addToCart = this.addToCart.bind(this);
    
    this.state = {
      show: false,
      currCombo:null
    };

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(combo) {
    this.setState({ show: true,  currCombo:combo });
  }


  addToCart(){
    this.props.addInToCart(this.state.currCombo)
  }


  render() {
    return (
      <div>
          <Container  className="root">
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add to cart?</Modal.Title>
              </Modal.Header>
              <Modal.Body>Do you want to add {this.state.currCombo? this.state.currCombo.title : null} to your cart?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  No
                </Button>
                <Button variant="primary" onClick={this.addToCart}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
        
            <SCLogo history={this.props.history}/>
                {this.props.data.map(subComboList => {
                return(
                    
                    <Row className="service-row" key={subComboList.id}>
                    <Col>
                        <h2 className="service-type">{subComboList.type}</h2>
                        {subComboList.data.map(combo=>{
                        return(
                          <Col key={combo.id}>
                            <Card  className="combo">
                            <Card.Header>{combo.title}</Card.Header>
                                <Card.Body>
                                    {combo.detail.split("|").map(item=>{
                                    return(
                                        <p key={item}>{item}</p>
                                    )
                                    }
                                    )}
                                </Card.Body>
                            <Card.Footer>${combo.price}/Year</Card.Footer>
                            <Card.Footer><Button variant="primary" onClick={()=> {combo.type = subComboList.type; this.handleShow(combo)}} >Add to Cart</Button></Card.Footer>
                            </Card>
                          </Col>

                        )
                        })}
                        </Col>
                    </Row>
                )
                })}


         
            
          </Container>
      </div>
    );
  }
}

export default Services;