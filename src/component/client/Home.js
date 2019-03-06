import React, { Component } from 'react';
import { Container, Button} from 'react-bootstrap'
import ShoppingCartLogo from "./SCLogo"
import "./Style.css"

class Home extends Component {

  componentDidMount(){
    if(this.props.auth.user===null){
      this.props.history.push(`/Auth`);
    }
  }

  toAddition (id) {
    this.props.history.push(`/Addition/${id}`);
  }

  render() {

    return (
      <div>
           <ShoppingCartLogo history={this.props.history}/>
           {/* <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://www.builtinboston.com/sites/www.builtinboston.com/files/inline-images/shutterstock_300344546_0.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://www.itgeekrambling.co.uk/wp-content/uploads/2016/11/WindowsServer2016Background.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="http://ubuntuvps.net/wp-content/uploads/2015/06/ubuntu-wallpapers-18.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel> */}

          {/* <Container className="combo-container">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                <div className="combo-container">

                  <Card className="combo">
                  <Card.Header>Featured</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer><Button variant="primary" onClick={this.toAddition.bind(this,2)}>Go somewhere</Button></Card.Footer>
                  </Card>

                  <Card  className="combo">
                  <Card.Header>Featured</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer><Button variant="primary" onClick={this.toAddition.bind(this,1)}>Go somewhere</Button></Card.Footer>
                  </Card>
                </div>

              </Tab>
              <Tab eventKey="profile" title="Profile">
                bbbb
              </Tab>
              <Tab eventKey="contact" title="Contact">
                ccc
              </Tab>
            </Tabs>

            
          </Container> */}

          <Container className="root">
            <p>Hi,{this.props.auth.user===null?null:this.props.auth.user.username}</p>
            <Button href="#NewOrder/Step1" >New Order</Button>
          </Container>


      </div>
    );
  }
}

export default Home;