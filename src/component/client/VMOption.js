import React, { Component } from 'react';
import {  Row, Col,Button, ButtonGroup, Form } from 'react-bootstrap'
import "./Addition.css"

class  VMOption extends Component {

    constructor(props){
        super(props)

        var showDiv = [], options=[]

        var i

        if(this.props.servers){
            
            for(i=0; i<this.props.servers.length;i++){
                if(i===0){
                    showDiv[i]=true;
                }
                else{
                    showDiv[i]=false;
                }
            }
        }

        if(this.props.options){
            for(i=0; i<this.props.options.length;i++){
                options[i]=this.props.options[i]
                switch(options[i].type){
                    case "INPUT":
                       options[i].value=0
                       break
                    case "CHECKBOX":
                       options[i].value=false
                       break
                    default:
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
        if(e.target.value <0 )
            e.target.value = 0
        tmp[index].value=e.target.value
        this.setState({currOptions:tmp})
    }

    handleCheckOptionChange(index,e){
        var tmp = this.state.currOptions
        tmp[index].value=e.target.checked
        this.setState({currOptions:tmp})
    }

    handleRadioOptionChange(index,e){
        var tmp = this.state.currOptions
        tmp[index].index=parseInt(e.target.value)
        this.setState({currOptions:tmp})
    }


    render() {
        console.log(this.state)

        var total = parseFloat(this.props.combo.price)
        for(let option of this.state.currOptions){
            if(option.value)
                total+=parseFloat(option.value*option.price)
            if(option.index && option.index>=0)
                total+=parseFloat(option.options[option.index].price)
        }


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
                            
                                            <Form.Group className="addition-option-row" as={Row} key={option.id} >
                                            <Col xs="5" className="addition-option-row-label">{option.name} ({option.price}/{option.unit})</Col>
                                            <Col xs="7" className="number-input">
                                                <input className="quantity" value={option.value} onChange={this.handleInputOptionChange.bind(this,index)}
                                                type="number" />
                                            </Col>
                                            </Form.Group>
                                 
                                      )
                                    case "CHECKBOX":
                                        return(
                                        <Form.Group className="addition-option-row" as={Row} key={option.id}>
                                            <Form.Check type="checkbox" onChange={this.handleCheckOptionChange.bind(this,index)} checked={option.value} label={option.name +" ("+ option.price +"/"+option.unit+")"} />
                                        </Form.Group>
                                        )
                                    case "RADIOBOX":
                                        return(
                                        <Form.Group onChange={this.handleRadioOptionChange.bind(this,index)} className="addition-option-row" as={Row} key={option.id} controlId={option.name}>
                                   
                                                <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                                <Col xs="7">
                                                    {option.options.map((radioOption,index1) => {
                                                        const key = radioOption.name +" ("+ radioOption.price +"/"+radioOption.unit+")"
                                                        return(
                                                            <Form.Check key={index1} as={Row} type="radio" value={index1} label={key} name={option.name}/>

                                                        )
                                                    })}
                                                </Col>
                                            

                                        </Form.Group>
                
                                        )
                                    default:
                                        return(null)
                                }
                            })
                            :
                            null
                            }
                           
                        
                            </Form>
                         </div>
                        
                  </Col>
                  <Col xs={3} className="addition-summary">
                        <Row className="summary-row" >
                            <Col>
                                <Row className="summary-row1" >
                                    <Col  className="summary-col" > Base: </Col>
                                    <Col   className="summary-col"> {this.props.combo.title}</Col>
                                </Row>
                                <Row className="summary-row2" >
                                    <Col className="summary-col" > { this.props.combo.price}</Col>
                                </Row>
                            </Col>

                            
                        </Row>
                      {this.state.currOptions?
                            this.state.currOptions.map((option, index)=>{
                                if(option.value && option.value!==0 && option.value!=="0" && option.value!==false && option.value!==''){
                                    return(
                                        
                                        <Row className="summary-row" key={index}>
                                            <Col>
                                                <Row className="summary-row1" >
                                                    <Col  className="summary-col" > {option.name}</Col>
                                                    <Col  className="summary-col"> {option.value} {option.unit}</Col>
                                                </Row>
                                                <Row className="summary-row2">
                                                    <Col className="summary-col" > { new Number(option.value*option.price).toFixed(2)}</Col>
                                                </Row>
                                            </Col>

                                            
                                        </Row>
                                    )
                                }
                                else{
                                    if(option.index>=0){
                                      
                                        return(
                                        
                                            <Row className="summary-row" key={index}>
                                                <Col>
                                                    <Row className="summary-row1" >
                                                        <Col className="summary-col" > {option.options[option.index].name}</Col>
                                                        <Col className="summary-col"> {option.options[option.index].value} {option.options[option.index].unit}</Col>
                                                    </Row>
                                                    <Row className="summary-row2">
                                                        <Col className="summary-col" > { new Number(option.options[option.index].price).toFixed(2)}</Col>
                                                    </Row>
                                                </Col>
    
                                                
                                            </Row>
                                        )
                                    }

                                }
                                return(null)
                            })
                            :
                            null
                            }

                            <Row className="summary-row" >
                                <Col>
                                    <Row className="summary-row1" >
                                        <Col  className="summary-col" > Total: </Col>
                                    </Row>
                                    <Row className="summary-row2" >
                                        <Col className="summary-col" > { total.toFixed(2)}</Col>
                                    </Row>
                                </Col>

                                
                            </Row>
                  </Col>
                </Row>
            </div>
            
        </div>
    );
  }
}

export default VMOption;