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
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const ContactCard = (props) => {
  const { contacts, deleteContact } = props;
  return (
    <React.Fragment>
      <Card>
        <ListGroup flush>
          {contacts?.map((contact) => (
            <React.Fragment key={contact.id}>
              <ListGroup.Item>
                <Container>
                  <Row>
                    <Col>
                      <Card.Title>{contact?.fullName}</Card.Title>
                      <Card.Text>
                        {contact?.telephone} <br />
                        {contact?.email}
                      </Card.Text>
                    </Col>
                    <Col>
                      <div className="d-flex justify-content-end">
                        <ButtonGroup aria-label="Basic example">
                          <Button
                            default
                            outline
                            className="border-0 text-danger"
                            onClick={() => deleteContact(contact)}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="mr-2"
                            />
                            Delete
                          </Button>
                          <Link to={`/edit-contact/${contact.id}`}>
                            <Button warning>
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="mr-2"
                              />
                              Edit
                            </Button>
                          </Link>
                        </ButtonGroup>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>{' '}
            </React.Fragment>
          ))}
        </ListGroup>
      </Card>
    </React.Fragment>
  );
};
export default ContactCard;
