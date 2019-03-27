import React, { Component } from 'react';
import { Container, Button, Tabs, Tab, Card} from 'react-bootstrap'
import  "./Home.css"
import SCLogo from "./SCLogo"

class Home extends Component {

  componentDidMount(){
    if(this.props.auth.user===null){
      this.props.history.push(`/Auth`);
    }
  }


  render() {

    return (
      <div>
          <Container fluid className="root">
            <SCLogo history={this.props.history}/>
            <div className="header-title">
              <div >Hi, {this.props.auth.user===null?null:this.props.auth.user.username}</div>
              <div>Here is our services</div>
              <Button className="request-btn" variant="success" href="#Services" >Request New Servers</Button>
              <br></br>
              <Button className="request-btn" variant="success" >Update Servers</Button>
            </div>

         
            <div className="content">
              <Container >
                <Tabs className="justify-content-center" defaultActiveKey={this.props.data.type} id="uncontrolled-tab-example">
                {this.props.data.map(subComboList => {
                return(
                    <Tab  eventKey={subComboList.type} title={subComboList.type} key={subComboList.id}>
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
                            <Card.Footer><Button variant="primary" >Detail</Button></Card.Footer>
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

         
            
          </Container>
      </div>
    );
  }
}

export default Home;