import React, { Component } from 'react';
import { Container, Form, Col, Row, Button} from 'react-bootstrap'
import ProgressBar from '../ProgressBar'


import "../Style.css"



class Step4 extends Component {

    constructor(props){
        super(props)


        this.state={
            
        }
    }


    render() {

        console.log(this.props)
        return (
        <div>
            <Container fluid>
                <Row className="step-header">
                    <Col className='title' > Step 4</Col>
                </Row>   
            </Container>

            <ProgressBar/>

            <Container  className="root">
                
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    </Form>  

                <Form className="form-frame">
                    <Form.Row>
                         <Form.Group className="text-center" as={Col} controlId="formGridState1" >
                            <Button size="lg" href="#NewOrder/Step3">Back</Button>
                        </Form.Group>
                        <Form.Group className="text-center" as={Col} controlId="formGridState" >
                            <Button size="lg" href="#ShoppingCart">Next</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
            
        </div>
        );
    }
}

export default Step4;