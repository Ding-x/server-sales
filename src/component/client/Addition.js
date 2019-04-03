import React, { Component } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap'
import "./Addition.css"
import VMOption from "./VMOption"

class  Addition extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      serverNum: 3,
      servers: [{name:"ProductionServer", type:"Prod"}, {name:"DevelopmentServer", type:"Dev"}, {name:"TestServer", type:"Test"}],
      saveBtn:true,
      showServerContainer:false
    };
  }

  handleClose() {
    
    this.setState({ show: false, showServerContainer:true });
    this.checkSaveBtn()
  }

  handleShow() {
    this.setState({ show: true, showServerContainer:false });
    this.checkSaveBtn()
  }


  checkSaveBtn(){
    for(let server of this.state.servers){
      if(server.name!=='' && server.type!==-1){
        this.setState({
          saveBtn:true
        })
      }
      else{
        this.setState({
          saveBtn:false
        })
      }

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

    this.checkSaveBtn()
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

    this.checkSaveBtn()
  
}


  render() {
console.log(this.props)
    var result = []
      var i
      for(i=0; i< this.state.serverNum; i++){
          result.push(
              <Row key={i}>
                  <Col xs={2}> Server {i+1} </Col>
                  <Col>
                      <Form.Group  controlId={i*2} >
                        {this.state.servers.length>0?
                          <Form.Control  placeholder="Server name" defaultValue={this.state.servers[i].name} />
                          :
                          <Form.Control  placeholder="Server name" />
                          }
                      </Form.Group>
                  </Col>
                  <Col>
                      <Form.Group  controlId={i*2+1}>
                      
                      {this.state.servers.length>0?
                          <Form.Control as="select" defaultValue={this.state.servers[i].type} >

                              <option disabled value={-1} key={-1} >Choose server type ...</option>
                              <option value="Prod">Prod</option>
                              <option value="Dev">Dev</option>
                              <option value="Test">Test</option>
                              <option value="UAT">UAT</option>
                          </Form.Control>
                          :
                          <Form.Control as="select" defaultValue="-1" >
                        
                          <option disabled value={-1} key={-1} >Choose server type ...</option>
                          <option>Prod</option>
                          <option>Dev</option>
                          <option>Test</option>
                          <option>UAT</option>
                      </Form.Control>
                          }

                      </Form.Group>                       
                  </Col>
                  
              </Row>
          )
      }
      
      

    return (
      <div>
            <Container fluid>
                <Row className="addition-header">
                  <Col>                    
                    <div className='addition-header-title' > Addition Resource for {this.props.combo?this.props.combo.title:null}</div>
                    <div className='addition-header-sub-title' > {this.props.combo?this.props.combo.detail:null}</div>
                  </Col>
                </Row>


                <Modal 
                {...this.props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show} 
                enforceFocus
                >
                  <Modal.Body>
                  <Form className="addition-form-frame1">
                    <Form.Row >
         
                    <Form.Group  as={Col} controlId="formGridState" onChange={this.handleSelect}>
                    <Form.Label>How many servers you need?</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState" onChange={this.handleSelect}>
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

                <Form className="addition-form-frame2" onChange={this.handleInput}>{result}</Form>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose} disabled={!this.state.saveBtn}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal> 
                
             

                {this.state.showServerContainer? <VMOption servers={this.state.servers} options={this.props.options} reSelect={this.handleShow} combo={this.props.combo} updateItemInCart={this.props.updateItemInCart} cart={this.props.cart} history={this.props.history}/>  : null }
            </Container>

      </div>
    );
  }
}

export default Addition;