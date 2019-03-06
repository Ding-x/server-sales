import React, { Component } from 'react';
import { Container, Form, Col, Row, Button} from 'react-bootstrap'
import ProgressBar from '../ProgressBar'


import "../Style.css"



class Step2 extends Component {

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
                    <Col className='title' > Step 2</Col>
                </Row>   
            </Container>

            <ProgressBar/>

            <Container fluid className="root">
                <Row className="step2-frame">
                    {this.state.projects.map((project,index)=>{
                        return(
                            <Col onClick={this.handleJump.bind(this,index)} className="step2-project-box" key={index} id={index}>
                                
                                    <h4  className="step2-title">Project {index+1}: {project.name}</h4>

                                    {project.servers? <p>You will have {project.servers.length} servers</p> : null}
                                    {project.servers? project.servers.map((server, index)=>{
                                        return (
                                            <div key={index}>{server.name},{server.type}</div>
                                        )
                                    })
                                :
                                null}
                                

                            </Col>
    
                        )
                    })}
                </Row>


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

export default Step2;