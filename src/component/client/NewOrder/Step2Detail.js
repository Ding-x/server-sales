import React, { Component } from 'react';
import { Container, Form, Col, Row, Button} from 'react-bootstrap'
import ProgressBar from '../ProgressBar'


import "../Style.css"



class Step2Detail extends Component {

    constructor(props){
        super(props)
        var serverNum = 1
        var servers = [{name:"", type:-1}]
        if(this.props.cart.servers){
            serverNum=this.props.cart.servers.length
            for(var i=0; i< this.props.cart.servers.length; i++){
                servers[i]=this.props.cart.servers[i]
            }
        }

        this.state={
            project:this.props.cart ? this.props.cart :null,
            serverNum:serverNum,
            servers:servers
        }
    }

    handleSelect=(e)=>{
        var tmp = []
        for(var i=0; i< e.target.value; i++){
            tmp[i]={name:"", type:-1}
            if(this.state.servers[i])
                tmp[i]=this.state.servers[i]
        }
 
        this.setState({
            serverNum:e.target.value,
            servers:tmp
        })
    }

    handleInput=(e)=>{
        
        var index = Math.floor(e.target.id/2)
        var mod = e.target.id%2
        var tmp = this.state.servers


        if(mod===0){
            tmp[index].name=e.target.value
        }
        else{
            tmp[index].type=e.target.value
        }
        this.setState({
            servers:tmp
        })
      
    }

    handleStorage=()=>{
        var cart = this.props.products
        cart[this.props.index].servers=this.state.servers
        this.props.updateCart(cart)
    }

    render() {
        var result = []
        var i

        if(this.state.servers.length>0){
            for(i=0; i< this.state.serverNum; i++){
                result.push(
                    <Row key={i}>
                        <Col xs={2}> Server {i+1} </Col>
                        <Col>
                            <Form.Group  controlId={i*2} >
                                <Form.Control  placeholder="Server name" defaultValue={this.state.servers[i].name} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group  controlId={i*2+1}>
                                <Form.Control as="select" defaultValue={this.state.servers[i].type} >
                                    <option disabled value={-1} key={-1} >Choose server type ...</option>
                                    <option>Prod</option>
                                    <option>Dev</option>
                                    <option>Test</option>
                                    <option>UAT</option>
                                </Form.Control>
                            </Form.Group>                       
                        </Col>
                        
                    </Row>
                )
            }
        }
        else{
            for(i=0; i< this.state.serverNum; i++){
                result.push(
                    <Row key={i}>
                        <Col xs={2}> Server {i+1} </Col>
                        <Col>
                            <Form.Group  controlId={i*2} >
                                <Form.Control  placeholder="Server name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group  controlId={i*2+1}>
                                <Form.Control as="select" defaultValue="-1" >
                                    <option disabled value={-1} key={-1} >Choose server type ...</option>
                                    <option>Prod</option>
                                    <option>Dev</option>
                                    <option>Test</option>
                                    <option>UAT</option>
                                </Form.Control>
                            </Form.Group>                       
                        </Col>
                    </Row>
                )
            }
        }


        return (
        <div>
            <Container fluid>
                <Row className="step-header">
                    <Col className='title' > Step 2</Col>
                </Row>   
            </Container>

            <ProgressBar/>

            <Container className="root">

                <Container className="step2-frame" >
                    <Row>
                        <Col xs={5} >
                        <Row ><h3 className="step2-title">Project: {this.state.project.name}</h3></Row>
                            <Row>
                                <Form >
                                    <Form.Row>
                                        <Form.Group as={Col}  onChange={this.handleSelect}>
                                        <Form.Label>How many servers you will have for project {this.state.project.name}?</Form.Label>
                                        <Form.Control as="select" defaultValue={this.state.serverNum}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Row>
                        </Col>
                        <Col xs={7} className="step2-frame-right">
                            <Form onChange={this.handleInput}>{result}</Form>
                        </Col>
                    </Row>
                </Container>
   


                <Form className="form-frame">
                    <Form.Row>
                        
                        <Form.Group className="text-center" as={Col} controlId="formGridState1" >
                            <Button size="lg" href="#NewOrder/Step2">Back</Button>
                        </Form.Group>
                        <Form.Group className="text-center" as={Col} controlId="formGridState2" >
                            <Button size="lg" href="#NewOrder/Step2" onClick={this.handleStorage}>Save</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
            
        </div>
        );
    }
}

export default Step2Detail;