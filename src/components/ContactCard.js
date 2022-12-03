import React from 'react';
import {
  Card,
  Row,
  Col,
  Container,
  Row,
  Button,
  ListGroup,
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
                <Button danger outline className="mr-2">
                  <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
                  Delete
                </Button>
                <Button warning>
                  <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                  Edit
                </Button>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
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
                <Button danger outline className="mr-2">
                  <FontAwesomeIcon icon={faTrashCan} className="mr-2" />
                  Delete
                </Button>
                <Button warning>
                  <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                  Edit
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Text>
      </Card.Body> */}
    </Card>
  );
};
export default ContactCard;
