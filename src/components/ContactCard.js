import React from 'react';
import { Card, Row, Col, Container, Row, Button } from 'bootstrap-4-react';

const ContactCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <Container>
            <Row>
              <Col>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is some text <br /> within a card body.
                </Card.Text>
              </Col>
              <Col>
                <Button danger outline>
                  Delete
                </Button>
                <Button warning>Edit</Button>
              </Col>
            </Row>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ContactCard;
