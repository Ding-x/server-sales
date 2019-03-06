import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'


class  NotFoundPage extends Component {
  render() {
    return (
      <div>
            <Container fluid>
                <Row className="cart-header">
                    <Col className='title' > Page Not Found</Col>
                </Row>  
                
            </Container>

      </div>
    );
  }
}

export default NotFoundPage;