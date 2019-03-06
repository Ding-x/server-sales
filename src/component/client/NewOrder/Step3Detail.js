import React, { Component } from 'react';
import { Container, Form, Col, Row, Button, Card, Tabs, Tab} from 'react-bootstrap'
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


    selectCombo(id){
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
                 <Container className="combo-container">
                    <Tabs defaultActiveKey={this.props.data.type} id="uncontrolled-tab-example">
                    {this.props.data.map(subComboList => {
                    return(
                        <Tab eventKey={subComboList.type} title={subComboList.type} key={subComboList.id}>
                        <div className="combo-container">
                            {subComboList.data.map(combo=>{
                            return(
                                <Card key={combo.id} className="combo">
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
                                <Card.Footer><Button variant="primary" onClick={this.selectCombo.bind(this,combo.id)}>Select</Button></Card.Footer>
                                </Card>
                            )
                            })}
                        </div>
                        </Tab>
                    )
                    })}
                    </Tabs>

                    
                </Container>

               
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
            </Container>
            <Container>  

                <Form className="form-frame">
                    <Form.Row>
                        
                        <Form.Group className="text-center" as={Col} controlId="formGridState1" >
                            <Button size="lg" href="#NewOrder/Step3">Cancel</Button>
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