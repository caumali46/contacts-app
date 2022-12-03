import React from 'react';
import {
  Card,
  Row,
  Col,
  Container,
  Row,
  Button,
  ListGroup,
  ButtonGroup,
} from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const ContactCard = (props) => {
  return (
    <Card>
      <ListGroup flush>
        <ListGroup.Item>
          <Container>
            <Row>
              <Col>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is some text <br /> within a card body.
                </Card.Text>
              </Col>
              <Col>
                <div className="d-flex justify-content-end">
                  <ButtonGroup aria-label="Basic example">
                    <Button default outline className="border-0 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
                      Delete
                    </Button>
                    <Button warning>
                      <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                      Edit
                    </Button>
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>{' '}
      </ListGroup>
    </Card>
  );
};
export default ContactCard;
