import React, { Component } from 'react';
import { Container, Form, Col, Row, Button} from 'react-bootstrap'
import ProgressBar from '../ProgressBar'
import "../Style.css"

class Step1 extends Component {

    constructor(props){
        super(props)
        this.state={
            projectNum:this.props.cart ? this.props.cart.length : 1,
            projects:this.props.cart ? this.props.cart : []
        }
    }


    handleSelect=(e)=>{

        var tmp = []
        for(var i=0; i< e.target.value; i++){
            tmp[i]=this.state.projects[i]
        }
        this.setState({
            projectNum:e.target.value,
            projects:tmp
        })
    }

    handleInput=(e)=>{
        var tmp = this.state.projects
        tmp[e.target.id]={name:e.target.value}
        this.setState({
            projects:tmp
        })
    }

    handleStorage=()=>{
        this.props.updateCart(this.state.projects)
    }

    
    render() {
        var num = this.state.projectNum
        var result = []
        var i

        if(this.state.projects.length>0){
            for(i=0; i< num; i++){
                result.push(
                    <Form.Group as={Row} controlId={i} key={i}>
                        <Form.Label column sm="1">Project {i+1}</Form.Label>
                        <Col sm="11">
                            <Form.Control placeholder="Project name" defaultValue={this.state.projects[i]?this.state.projects[i].name:""}/>
                        </Col>
                    </Form.Group>
                )
            }
        }
        else{
            for(i=0; i< num; i++){
                result.push(
                    <Form.Group as={Row} controlId={i} key={i}>
                        <Form.Label column sm="1">Project {i+1}</Form.Label>
                        <Col sm="11">
                            <Form.Control placeholder="Project name" />
                        </Col>
                    </Form.Group>
                )
            }
        }

        return (
        <div>
            <Container fluid>
                <Row className="step-header">
                    <Col className='title' > Step 1</Col>
                </Row>   
            </Container>

            <ProgressBar/>

            <Container className="root">
                <Form className="form-frame">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState" onChange={this.handleSelect}>
                        <Form.Label>How many projects you will have?</Form.Label>
                        <Form.Control as="select" defaultValue={this.state.projectNum}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

            
                </Form>

                <Form className="form-frame" onChange={this.handleInput}>{result}</Form>

                <Form className="form-frame">
                    <Form.Row>
                        
                        <Form.Group className="text-center" as={Col} controlId="formGridState" >
                            <Button size="lg" href="#Home">Back</Button>
                        </Form.Group>
                        <Form.Group className="text-center" as={Col} controlId="formGridState" >
                            <Button size="lg" href="#NewOrder/Step2" onClick={this.handleStorage}>Next</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        </div>
        );
    }
}

export default Step1;