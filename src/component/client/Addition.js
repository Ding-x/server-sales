import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class  Addition extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
            <Container fluid>
                <Row className="cart-header">
                    <Col className='title' > Addition</Col>
                </Row>   
            </Container>

      </div>
    );
  }
}

export default Addition;