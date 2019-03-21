import React, { Component } from 'react';
import { Container, Row, Col,Button, ButtonGroup, Form } from 'react-bootstrap'
import "./Addition.css"

class  VMOption extends Component {

    constructor(props){
        super(props)

        var showDiv = [], options=[]

        if(this.props.servers){
            
            for(var i=0; i<this.props.servers.length;i++){
                if(i===0){
                    showDiv[i]=true;
                }
                else{
                    showDiv[i]=false;
                }
            }
        }

        if(this.props.options){
            for(var i=0; i<this.props.options.length;i++){
                options[i]=this.props.options[i]
                switch(options[i].type){
                    case "INPUT":
                       options[i].value=0
                       break
                    case "CHECKBOX":
                       options[i].value=false
                       break
                }
               
            }
        }

        this.state={
            showDiv:showDiv,
            currServer:this.props.servers[0],
            currOptions:options,
            servers:this.props.servers,
            
        }
    }


    setCurrServer(id){
        this.setState({currServer:this.props.servers[id]})
    }

    handleInputOptionChange(index,e){
        var tmp = this.state.currOptions
        tmp[index].value=e.target.value
        this.setState({currOptions:tmp})
    }

    handleCheckOptionChange(index,e){
        var tmp = this.state.currOptions
        tmp[index].value=e.target.checked
        this.setState({currOptions:tmp})
    }


    render() {
        console.log(this.state)
        return (
        <div>
            <div>
               <Row className="addition-content">
                   <Col xs={2}>
                       <ButtonGroup vertical className="addition-btns">
                       {this.props.servers.map((server,index)=>{
                           return(
                            <Button variant="info" key={index} onClick={this.setCurrServer.bind(this,index)}>{server.name} ({server.type})</Button>
                           )
                       })}

                       <Button variant="secondary" onClick={this.props.reSelect}>Re-Select</Button>
                       </ButtonGroup>
                    </Col>
                  <Col xs={7} >
                        <div className="addition-options"> 
                        <div className="addition-options-title">{this.state.currServer.name}</div>
                        <Form>
                            {this.state.currOptions?
                            this.state.currOptions.map((option, index)=>{
                                switch(option.type){
                                    case "INPUT":
                                      return(
                            
                                            <Form.Group as={Col} key={option.id} controlId="formGridCity">
                                            <Form.Label>{option.name} ({option.price}/{option.unit})</Form.Label>
                                            <Form.Control value={option.value} onChange={this.handleInputOptionChange.bind(this,index)}/>
                                            </Form.Group>
                                 
                                      )
                                      break
                                    case "CHECKBOX":
                                        return(
                                        <Form.Group as={Col} key={option.id}>
                                            <Form.Check type="checkbox" onChange={this.handleCheckOptionChange.bind(this,index)} checked={option.value} label={option.name +" ("+ option.price +"/"+option.unit+")"} />
                                        </Form.Group>
                                        )
                                        break
                                }
                            })
                            :
                            null
                            }
                           
                           

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                         </div>
                        
                  </Col>
                  <Col xs={3} className="addition-summary">
                      {this.state.currOptions?
                            this.state.currOptions.map((option, index)=>{
                                console.log(option.value)
                                if(option.value!="0" && option.value!==false){
                                    return(
                                        <p>{option.name}</p>
                                    )
                                }
                            })
                            :
                            null
                            }
                  </Col>
                </Row>
            </div>
            
        </div>
    );
  }
}

export default VMOption;