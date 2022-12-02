import React from 'react';
import { Card, Row, Col } from 'bootstrap-4-react';

const ContactCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle mb="2" text="muted">
          Card subtitle
        </Card.Subtitle>
        <Card.Text>
          <Row>
            <Col>1 </Col>
          </Row>
          <Row>
            <Col>3</Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ContactCard;
