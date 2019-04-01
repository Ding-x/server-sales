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
            fixedOption:[
                {
                    id:0,
                    name:"Vendor requirement for CPUs",
                    value:1,
                    type:"INPUT"
                },
                {
                    id:1,
                    name:"Will server contain an Oracle RDMS or MS SQL Server (Not including MS SQL Express) database?",
                    type:"COMPUNDRADIOBOX",
                    value:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}],
                    subOption:{
                        name:"Which server?",
                        type:"RADIOBOX",
                        index:-1,
                        options:[{name:"Oracle"},{name:"MS SQL",}]
                    }
                },
                
                {
                    id:2,
                    name:"Will this contain a web server?",
                    type:"COMPUNDRADIOBOX",
                    value:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}],
                    subOption:{
                        name:"Which software? (IIS, Apache, etc.)",
                        type:"INPUT",
                        value:""
                    }
                },
                {
                    id:3,
                    name:"Long term backup of data required?",
                    type:"RADIOBOX",
                    index:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}]
                },
                {
                    id:4,
                    name:"Will this server contain or manage any credit card information?",
                    type:"RADIOBOX",
                    index:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}]
                },
                {
                    id:5,
                    name:"Will this server contain or manage any PCI or FIPPA information?",
                    type:"RADIOBOX",
                    index:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}]
                },
                {
                    id:6,
                    name:"Does this server need to access anything on the Internet?",
                    type:"RADIOBOX",
                    index:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}]
                },
                {
                    id:7,
                    name:"Does anything on the Internet need to access this server?",
                    type:"RADIOBOX",
                    index:false,
                    options:[{name:"No", value:false},{name:"Yes", value:true}]
                },
                {
                    id:8,
                    name:"Admin User/Group",
                    value:"",
                    type:"INPUT"
                },
                {
                    id:9,
                    name:"Template Name (If applicable)",
                    value:"",
                    type:"INPUT"
                },
                {
                    id:10,
                    name:"Reboot Day and Time",
                    value:"",
                    type:"INPUT"
                },
                {
                    id:11,
                    name:"Any other notes or comments",
                    value:"",
                    type:"INPUT"
                }
            ]
            
        }
    }


    setCurrServer(id){
        this.setState({currServer:this.props.servers[id]})
    }

    handleInputOptionChange(index,e){
        var tmp = this.state.currOptions
        if(e.target.value <0 )
            e.target.value = 0
        tmp[index].value=Math.round(e.target.value)
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


    handleRadioFixedOptionChange(index,e){
        var tmp = this.state.fixedOption
        tmp[index].value=(/true/i).test(e.target.value)
        this.setState({fixedOption:tmp})
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
                                            <Col xs="5" className="addition-option-row-label">{option.name} (${option.price} / {option.unit})</Col>
                                            <Col xs="7" className="number-input">
                                                <input className="quantity" value={option.value} onChange={this.handleInputOptionChange.bind(this,index)}
                                                type="number" />
                                            </Col>
                                            </Form.Group>
                                 
                                      )
                                    case "CHECKBOX":
                                        return(
                                        <Form.Group className="addition-option-row" as={Row} key={option.id}>
                                            <Form.Check type="checkbox" onChange={this.handleCheckOptionChange.bind(this,index)} checked={option.value} label={option.name +" ($"+ option.price +" / "+option.unit+")"} />
                                        </Form.Group>
                                        )
                                    case "RADIOBOX":
                                        return(
                                        <Form.Group onChange={this.handleRadioOptionChange.bind(this,index)} className="addition-option-row" as={Row} key={option.id} controlId={option.name}>
                                   
                                                <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                                <Col xs="7">
                                                    {option.options.map((radioOption,index1) => {
                                                        const key = radioOption.name +" ($"+ radioOption.price +" / "+radioOption.unit+")"
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

                            <Form>
                                {this.state.fixedOption?
                                this.state.fixedOption.map((option,index)=>{
                                    switch(option.type){
                                        case "COMPUNDRADIOBOX":
                                        return(
                                            <Row key={index} className="addition-option-row">
                                       
                                            <Col xs="5" >
                                                <Form.Group  onChange={this.handleRadioFixedOptionChange.bind(this,index)}   key={option.id} controlId={index}>
                                                    <Row className="addition-option-row-label">{option.name}</Row>
                                                    <br></br>
                                                    {option.options.map((radioOption,index1) => {
                                                        return(
                                                            <Form.Check key={index1}  type="radio" value={radioOption.value} label={radioOption.name} name={index}/>
                                                            
    
                                                        )
                                                    })}
                                                </Form.Group>
                                            </Col>
                                            <Col xs="7">
                                                {option.value === true?
                                                    <div>
                                                        <Row> {option.subOption.name} </Row>
    
                                                        {option.subOption.type ==="RADIOBOX"?
                                                        <Row>
                                                        <Form.Group as={Col} key={option.id}>
                                                        {option.subOption.options.map((anOption,index1) => {
                                                            return(
                                                                <Form.Check key={index1} as={Row} type="radio" value={index1} label={anOption.name} name={index1}/>
                                                            )
                                                        })}
                                                        </Form.Group>
                                                    </Row>
                                                    :
                                                    null}
                                                    
                                                    {option.subOption.type ==="INPUT"?
                                                        <Row>
                                                         <Form.Group key={option.id} >
                                             
                                                <Col  >
                                                    <input className="quantity" 
                                                    type="text" />
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
                                            <Form.Group  className="addition-option-row" as={Row} key={option.id} controlId={option.name}>
                                   
                                                    <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                                    <Col xs="7">
                                                        {option.options.map((radioOption,index1) => {
                                                            return(
                                                                <Form.Check key={index1} as={Row} type="radio" value={index1} label={radioOption.name} name={option.name}/>

                                                            )
                                                        })}
                                                    </Col>
                                                

                                            </Form.Group>
                                        )
                                        case "INPUT":
                                        return(
                              
                                              <Form.Group className="addition-option-row" as={Row} key={option.id} >
                                              <Col xs="5" className="addition-option-row-label">{option.name}</Col>
                                              <Col xs="7" className="number-input">
                                                  <input className="quantity" 
                                                  type="text" />
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
                         </div>
                        
                  </Col>
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
                      {this.state.currOptions?
                            this.state.currOptions.map((option, index)=>{
                                if(option.value && option.value!==0 && option.value!=="0" && option.value!==false && option.value!==''){
                                    return(
                                        
                                        <Row className="summary-row" key={index}>
                                            <Col>
                                                <Row className="summary-row1" >
                                                    <Col xs={8} className="summary-col" > {option.name}</Col>
                                                    <Col xs={4} className="summary-col"> {option.value} {option.unit}</Col>
                                                </Row>
                                                <Row className="summary-row2">
                                                    <Col className="summary-col" >${ new Number(option.value*option.price).toFixed(2)}</Col>
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
                                                        <Col className="summary-col" >${ new Number(option.options[option.index].price).toFixed(2)}</Col>
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