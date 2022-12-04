import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
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
import HighlightSearch from '../components/HighlightSearch';

const ContactCard = (props) => {
  const navigate = useNavigate();
  const { contacts, deleteContact, searchKeyWord } = props;
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
                      <Card.Title>
                        <HighlightSearch
                          searchWords={[searchKeyWord]}
                          textToHighlight={contact?.fullName}
                        />
                      </Card.Title>
                      <Card.Text>
                        <HighlightSearch
                          searchWords={[searchKeyWord]}
                          textToHighlight={contact?.telephone}
                        />
                        <br />
                        <HighlightSearch
                          searchWords={[searchKeyWord]}
                          textToHighlight={contact?.email}
                        />
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
                          <Button
                            warning
                            onClick={() =>
                              navigate(`/edit-contact/${contact.id}`)
                            }
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="mr-2"
                            />
                            Edit
                          </Button>
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
