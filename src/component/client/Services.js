import React, { Component } from 'react';
import { Container, Button, Card, Row, Col} from 'react-bootstrap'
import "./Services.css"
import SCLogo from "./SCLogo"

class Services extends Component {


  handleJumpToAddition(id){
    this.props.history.push('Addition/'+id)
  }


  render() {


    return (
      <div>
          <Container  className="root">
            <SCLogo/>
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
                            <Card.Footer>{combo.price}/Year</Card.Footer>
                            <Card.Footer><Button variant="primary" onClick={this.handleJumpToAddition.bind(this,combo.id)} >Select</Button></Card.Footer>
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