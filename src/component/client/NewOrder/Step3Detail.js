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
            showCombo:true

        }
    }

    toggleShowCombo=()=>{
        this.setState({
            showCombo:!this.state.showCombo
        })
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

            <Container  className="root">
            {
                this.state.showCombo?
                <div>
                <Row className="step2-frame" >
                    <h4>Virtual</h4>
                    <Col >
                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary" onClick={this.toggleShowCombo}> Select</Button></Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary" onClick={this.toggleShowCombo}> Select</Button></Card.Footer>
                        </Card>
                    </Col>
                    <Col>

                    </Col>
                   
                </Row>

                <Row className="step2-frame" >
                    <h4>Physical</h4>
                    <Col >
                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 1</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary" onClick={this.toggleShowCombo}> Select</Button></Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '80%',marginTop:'2rem' }}>
                            <Card.Header>Machine 2</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer ><Button variant="primary" onClick={this.toggleShowCombo}> Select</Button></Card.Footer>
                        </Card>
                    </Col>
                    <Col>

                    </Col>
                   
                </Row>
                </div>
                :
                <div>
                <Row className="step2-frame" >
                    <h4>Additional Resources </h4>
                    <Button variant="primary" onClick={this.toggleShowCombo}> Reselct Combo</Button>
                   
                </Row>
                <Row>
                    <Form>
                        {['checkbox', 'radio'].map(type => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="3 " type={type} id={`inline-${type}-3`}
                            />
                            </div>
                        ))}
                    </Form>
                </Row>
                </div>
            }
                

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