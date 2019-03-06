import React, { Component } from 'react';
import { Container, Form, Col, Row, Button, Card} from 'react-bootstrap'
import ProgressBar from '../ProgressBar'


import "../Style.css"



class Step3Detail extends Component {

    constructor(props){
        super(props)
        console.log(this.props)
       

        this.state={
            project:this.props.cart ? this.props.cart :null,

        }
    }

    

    render() {
      

        return (
        <div>
            <Container fluid>
                <Row className="step-header">
                    <Col className='title' > Step 3</Col>
                </Row>   
            </Container>

            <ProgressBar/>

            <Container fluid className="root">

                <Row className="step2-frame" >
                    <Col xs="3" className="step4-left">
                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary">Go Select</Button></Card.Footer>
                        </Card>

                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary">Go Select</Button></Card.Footer>
                        </Card>

                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 3</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary">Go Select</Button></Card.Footer>
                        </Card>


                    </Col>
                    <Col>
                    c
                    </Col>
                </Row>
   


                <Form className="form-frame">
                    <Form.Row>
                        
                        <Form.Group className="text-center" as={Col} controlId="formGridState1" >
                            <Button size="lg" href="#NewOrder/Step3">Back</Button>
                        </Form.Group>
                        <Form.Group className="text-center" as={Col} controlId="formGridState2" >
                            <Button size="lg" href="#NewOrder/Step3" onClick={this.handleStorage}>Save</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
            
        </div>
        );
    }
}

export default Step3Detail;