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
import AppModal from '../components/AppModal';

const ListGroupItem = (props) => {
  const { contact } = props;

  const handleDelete = () => {
    const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
  };
  return (
    <>
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
                    data-toggle="modal"
                    data-target="#exampleModal"
                    // onClick={() => handleDelete(contact)}
                  >
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
      <AppModal handleDelete={handleDelete} />
    </>
  );
};

const ContactCard = (props) => {
  const { contacts } = props;
  return (
    <React.Fragment>
      <Card>
        <ListGroup flush>
          {contacts?.map((contact) => (
            <ListGroupItem contact={contact} />
          ))}
        </ListGroup>
      </Card>
    </React.Fragment>
  );
};
export default ContactCard;
