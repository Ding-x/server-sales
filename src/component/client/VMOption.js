import React, { Component } from 'react';
import {  Row, Col,Button, ButtonGroup, Form } from 'react-bootstrap'
import "./Addition.css"
import fixedOption from "../../data/fixedOption"

class  VMOption extends Component {

    constructor(props){
        super(props)

        var showDiv = []
        var i

        if(this.props.servers){
            
            for(i=0; i<this.props.servers.length;i++){
                if(i===0){
                    showDiv[i]=true;
                }
                else{
                    showDiv[i]=false;
                }
                
                this.props.servers[i].option=JSON.parse(JSON.stringify(this.props.options))
                this.props.servers[i].fixedOption=JSON.parse(JSON.stringify(fixedOption))
                this.props.servers[i].complete=false
            }
        }

        this.state={
            showDiv:showDiv,
            currServer:this.props.servers[0],
            servers:this.props.servers,
            disableSubmit:true
        }
    }


    setCurrServer(id){
        this.setState({currServer:this.props.servers[id]})
    }

    handleNumberInputOptionChange(index,e){
        var tmp = this.state.currServer
        var input = Math.round(Number(e.target.value))
        if(input <0 )
            input = 0
        tmp.option[index].value=input
        this.setState({currServer:tmp})
    }

    handleCheckOptionChange(index,e){
        var tmp = this.state.currServer
        tmp.option[index].value=e.target.checked
        this.setState({currServer:tmp})
    }

    handleRadioOptionChange(index,e){
        var tmp = this.state.currServer
        tmp.option[index].index=parseInt(e.target.value)
        this.setState({currServer:tmp})
    }


    handleCompoundRadioFixedOptionChange(index,e){
        var tmp = this.state.currServer
        tmp.fixedOption[index].value=(/true/i).test(e.target.value)
        if(!tmp.fixedOption[index].value){
            if(tmp.fixedOption[index].subOption.index){
                tmp.fixedOption[index].subOption.index=-1
            }
            if(tmp.fixedOption[index].subOption.value){
                tmp.fixedOption[index].subOption.value=""
            }
        }
        this.setState({currServer:tmp})
    }

    handleNumberInputFixedOptionChange(index,e){
        var tmp = this.state.currServer
        var input = Math.round(Number(e.target.value))
        if(input <1 )
            input = 1
        tmp.fixedOption[index].value=input
        this.setState({currServer:tmp})
    }

    handleInputFixedOptionChange(index,e){
        var tmp = this.state.currServer
        tmp.fixedOption[index].value=e.target.value
        this.setState({currServer:tmp})
        this.checkComplete()
    }

    handleRadioFixedOptionChange(index,e){
        var tmp = this.state.currServer
        tmp.fixedOption[index].index=parseInt(e.target.value)
        this.setState({currServer:tmp})
    }

    handleCompoundRadioFixedOptionSubRaidoChange(index,e){
        var tmp = this.state.currServer
        tmp.fixedOption[index].subOption.index=parseInt(e.target.value)
        this.setState({currServer:tmp})
    }

    handleCompoundRadioFixedOptionSubInputChange(index,e){
        var tmp = this.state.currServer
        tmp.fixedOption[index].subOption.value=e.target.value
        this.setState({currServer:tmp})
        this.checkComplete()
    }


    checkComplete(){
        var result = true
        var tmp =  this.state.currServer

        for(let option of tmp.fixedOption){
            if(option.errorMess){
                if(option.value.length===0){
                    option.error=true
                    result = false
                }
                else{
                    option.error=false
                    result = true
                }
            }
            if(option.subOption && option.value===true){
                if(option.subOption.errorMess){
                    if(option.subOption.value.length===0){
                        option.subOption.error=true
                        result = false
                    }
                    else{
                        option.subOption.error=false
                        result = true
                    }
                }
            }
        }

        tmp.complete=result

        this.setState({currServer:tmp})

        this.checkSubmit()

    }

    checkSubmit(){
        var result =true
        for(let server of this.props.servers){
            if(!server.complete){
                result = false
            }
        }
        this.setState({disableSubmit:!result})
    }

    handleSubmit(){
        this.props.combo.servers=this.props.servers
        this.props.updateItemInCart(this.props.combo)
        this.props.history.push("/ShoppingCart")
        
    }


    goBack=()=>{
        this.props.history.goBack();
    }

    render() {
        console.log(this.props)
      
        var total = parseFloat(this.props.combo.price)
        for(let option of this.state.currServer.option){
            if(option.value)
                total+=parseFloat(option.value*option.price)
            if(option.index && option.index>=0)
                total+=parseFloat(option.options[option.index].price)
        }


        return (
        <div>
            <div>
               <Row className="addition-content">
                   {/* left navigation bar */}
                   <Col xs={2}>
                       <ButtonGroup vertical className="addition-btns">
                       {this.props.servers.map((server,index)=>{
                           if(server.complete)
                           return(
                            <Button variant="info" key={index} onClick={this.setCurrServer.bind(this,index)}>{server.name} ({server.type})</Button>
                           )
                           else
                           return(
                            <Button variant="warning" key={index} onClick={this.setCurrServer.bind(this,index)}>{server.name} ({server.type})</Button>
                           )
                       })}

                       <Button variant="secondary" onClick={this.props.reSelect}>Re-Select</Button>
                       </ButtonGroup>

                       <ButtonGroup vertical className="addition-btns">
                       <Button variant="light" onClick={this.goBack} >Back</Button>

                       <Button variant="success" disabled={this.state.disableSubmit} onClick={this.handleSubmit.bind(this)}>Submit</Button>
                       </ButtonGroup>

                    </Col>

                    {/* center content */}
                  <Col xs={7} >
                        <div className="addition-options"> 
                        <div className="addition-options-title">{this.state.currServer.name}</div>
                        <Form>
                            {this.state.currServer.option?
                            this.state.currServer.option.map((option, index)=>{
                                switch(option.type){
                                    case "INPUT":
                                      return(
                            
                                            <Form.Group className="addition-option-row" as={Row} key={option.id} >
                                            <Col xs="5" className="addition-option-row-label">{option.name} (${option.price}/{option.unit})</Col>
                                            <Col xs="7" className="number-input addition-option-row-content">
                                                <input className="quantity" value={option.value} onChange={this.handleNumberInputOptionChange.bind(this,index)}
                                                type="number" />
                                            </Col>
                                            </Form.Group>
                                 
                                      )
                                    case "CHECKBOX":
                                        return(
                                        <Form.Group className="addition-option-row" as={Row} key={option.id}>
                                            <Form.Check type="checkbox" onChange={this.handleCheckOptionChange.bind(this,index)} checked={option.value} label={option.name +" ($"+ option.price +")"} />
                                        </Form.Group>
                                        )
                                    case "RADIOBOX":
                                        return(
                                        <Form.Group onChange={this.handleRadioOptionChange.bind(this,index)} className="addition-option-row" as={Row} key={option.id} controlId={option.name}>
                                   
                                                <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                                <Col xs="7" className="addition-option-row-content">
                                                    {option.options.map((radioOption,index1) => {
                                                        const key = radioOption.name +" ($"+ radioOption.price +")"
                                                        console.log(option.index)
                                                        console.log(index1)
                                                        if(option.index===index1)
                                            
                                                        return(
                                                            <Form.Check defaultChecked key={index1} inline type="radio" value={index1} label={key} name={option.name}/>

                                                        )
                                                        else
                                                        return(
                                                            <Form.Check key={index1} inline type="radio" value={index1} label={key} name={option.name}/>

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

       
       
                            <Form>
                                {this.state.currServer.fixedOption?
                                this.state.currServer.fixedOption.map((option,index)=>{
                                    switch(option.type){
                                        case "COMPUNDRADIOBOX":
                                        return(
                                            <Row key={index} className="addition-option-row">
                                       
                                            <Col xs="5" >
                                                <Form.Group  onChange={this.handleCompoundRadioFixedOptionChange.bind(this,index)}   key={option.id} controlId={option.name}>
                                                    <Row className="addition-option-row-label">{option.name}</Row>
                                                    <br></br>
                                                    {option.options.map((radioOption,index1) => {
                                                        if(radioOption.value===false)
                                                        return(
                                                            <Form.Check key={index1} inline type="radio" defaultChecked value={radioOption.value} label={radioOption.name} name={option.name}/>
                                                        )
                                                        else
                                                        return(
                                                            <Form.Check key={index1} inline type="radio"  value={radioOption.value} label={radioOption.name} name={option.name}/>
                                                        )
                                                    })}
                                                </Form.Group>
                                            </Col>
                                            <Col xs="7" className="addition-option-row-content">
                                                {option.value === true?
                                                    <div>
                                                        <Row> {option.subOption.name} </Row>
                                                        
                                                        {option.subOption.error? <Row className="input-error">{option.subOption.errorMess}</Row>:null}
                                                        {option.subOption.type ==="RADIOBOX"?
                                                        <Row>
                                                        <Form.Group as={Col} key={option.id} controlId={option.subOption.name}>
                                                        {option.subOption.options.map((anOption,index1) => {
                                                            if(option.subOption.index===index1)
                                                            return(
                                                                <Form.Check defaultChecked key={index1} as={Row} type="radio" value={index1} label={anOption.name} name={option.subOption.name} onChange={this.handleCompoundRadioFixedOptionSubRaidoChange.bind(this,index)}/>
                                                            )
                                                            else
                                                            return(
                                                                <Form.Check key={index1} as={Row} type="radio" value={index1} label={anOption.name} name={option.subOption.name} onChange={this.handleCompoundRadioFixedOptionSubRaidoChange.bind(this,index)}/>
                                                            )
                                                        })}
                                                        </Form.Group>
                                                    </Row>
                                                    :
                                                    null}
                                                    
                                                    {option.subOption.type ==="INPUT"?
                                                        <Row>
                                                         <Form.Group key={option.id} >
                                                        <Col  className="number-input">
                                                            <input className="quantity" 
                                                            type="text" value={option.subOption.value} onChange={this.handleCompoundRadioFixedOptionSubInputChange.bind(this,index)} />
                                                        </Col>
                                                </Form.Group>
                                                    </Row>
                                                    :
                                                    null}
                                                        
                                                    </div>
                                                    
                                                    :
                                                    null
    
                                            }
                                                
                                            </Col>
                                        
                                            </Row>
                                  
                                        )
                                        case "RADIOBOX":
                                        return(
                                            <Form.Group  className="addition-option-row" as={Row} key={option.id} controlId={option.name} onChange={this.handleRadioFixedOptionChange.bind(this,index)}>
                                   
                                                    <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                                    <Col xs="7" className="addition-option-row-content">
                                                        {option.options.map((radioOption,index1) => {
                                                            if(option.index===index1)
                                                            return(
                                                                <Form.Check key={index1} defaultChecked inline type="radio" value={index1} label={radioOption.name} name={option.name} />

                                                            )
                                                            else
                                                            return(
                                                                <Form.Check key={index1} inline type="radio" value={index1} label={radioOption.name} name={option.name} />

                                                            )
                                                        })}
                                                    </Col>
                                            </Form.Group>
                                        )
                                        case "NUMBERINPUT":
                                        return(
                              
                                              <Form.Group className="addition-option-row" as={Row} key={option.id} >
                                              <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                              <Col xs="7" className="number-input addition-option-row-content">
                                                  <input className="quantity" 
                                                  type="number"  onChange={this.handleNumberInputFixedOptionChange.bind(this,index)} value={option.value}/>
                                              </Col>
                                              </Form.Group>
                                   
                                        )
                                        case "INPUT":
                                        return(
                              
                                              <Form.Group className="addition-option-row" as={Row} key={option.id} >
                                              <Col xs="5" className="addition-option-row-label">
                                              <Row>{option.name}</Row>
                                              {option.error?<Row className="input-error">{option.errorMess}</Row>:null}
                                              </Col>
                                              <Col xs="7" className="number-input addition-option-row-content">
                                                  <input className="quantity" 
                                                  type="text" value={option.value} onChange={this.handleInputFixedOptionChange.bind(this,index)} />
                                              </Col>
                                              </Form.Group>
                                   
                                        )
                                        default:
                                            return (null)
                                    }

                                })
                            :
                            null
                            }
                            </Form>
                            <Row><Button onClick={this.checkComplete.bind(this)} className="addition-save-btn">Save</Button></Row>
                         </div>
                        
                  </Col>

                  {/* right summary  */}
                  <Col xs={3} className="addition-summary">
                        <Row className="summary-row" >
                            <Col>
                                <Row className="summary-row1" >
                                    <Col xs={8} className="summary-col" > Base: </Col>
                                    <Col xs={4}  className="summary-col"> {this.props.combo.title}</Col>
                                </Row>
                                <Row className="summary-row2" >
                                    <Col className="summary-col" >${ this.props.combo.price}</Col>
                                </Row>
                            </Col>
                        </Row>
                      {this.state.currServer.option?
                           this.state.currServer.option.map((option, index)=>{
                                if(option.value && option.value!==0 && option.value!=="0" && option.value!==false && option.value!==''){
                                    return(
                                        
                                        <Row className="summary-row" key={index}>
                                            <Col>
                                                <Row className="summary-row1" >
                                                    <Col xs={8} className="summary-col" > {option.name}</Col>
                                                    <Col xs={4} className="summary-col"> {option.value} {option.unit}</Col>
                                                </Row>
                                                <Row className="summary-row2">
                                                    <Col className="summary-col" >${Number(option.value*option.price).toFixed(2)}</Col>
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
                                                        <Col xs={8} className="summary-col" > {option.options[option.index].name}</Col>
                                                        <Col xs={4} className="summary-col"> {option.options[option.index].value} {option.options[option.index].unit}</Col>
                                                    </Row>
                                                    <Row className="summary-row2">
                                                        <Col className="summary-col" >${Number(option.options[option.index].price).toFixed(2)}</Col>
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
                                        <Col className="summary-col" >${ total.toFixed(2)}</Col>
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