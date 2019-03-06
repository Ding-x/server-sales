import React, { Component } from 'react';
import { Container, Form, Col, Row, Button} from 'react-bootstrap'
import ProgressBar from '../ProgressBar'


import "../Style.css"



class Step3 extends Component {

    constructor(props){
        super(props)

        var serverNum = []

        if(this.props.cart){
            for(var i=0; i<this.props.cart.length; i++){
                serverNum[i]=1
            }
        }
        this.state={
            projectNum:this.props.cart ? this.props.cart.length : 1,
            projects:this.props.cart ? this.props.cart : [],
            serverNum:serverNum,
            servers:[]
        }
    }


    handleJump(index){
        this.props.history.push(`/NewOrder/Step2/`+index)
    }

    render() {

        console.log(this.props)
        return (
        <div>
            <Container fluid>
                <Row className="step-header">
                    <Col className='title' > Step 3</Col>
                </Row>   
            </Container>

            <ProgressBar/>

            <Container fluid className="root">
                
                    {this.state.projects.map((project,projectindex)=>{
                        return(
                            <Row className="step2-frame" key={projectindex} id={projectindex}>
                                <Col >
                                    <h4  className="step2-title">Project {projectindex+1}: {project.name}</h4>

                                    <Row>
                                    {project.servers? project.servers.map((server, serverIndex)=>{
                                        return (
                                            <Col xs="2" onClick={this.handleJump.bind(this,serverIndex)} className="step2-project-box" key={serverIndex}>
                                            <p>Server Name: {server.name}</p>
                                            <p>Server Type: {server.type}</p>
                                            </Col>
                                        )
                                    })
                                :
                                null}
                                </Row>

                                </Col>
                            </Row>
                        )
                    })}
                


                <Form className="form-frame">
                    <Form.Row>
                         <Form.Group className="text-center" as={Col} controlId="formGridState1" >
                            <Button size="lg" href="#NewOrder/Step1">Back</Button>
                        </Form.Group>
                        <Form.Group className="text-center" as={Col} controlId="formGridState" >
                            <Button size="lg" href="#NewOrder/Step3">Next</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
            
        </div>
        );
    }
}

export default Step3;