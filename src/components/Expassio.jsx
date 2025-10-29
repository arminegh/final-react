import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import logo from '../assets/expassio.png'


function Expassio() {
  return (
    <Container>
      <Row>
        <Col xs={10} md={4}>
          <Image src={logo} thumbnail />
        </Col>
       <h1>Tu idea, yo diseño</h1>
      </Row>
    </Container>
  );
}

export default Expassio;