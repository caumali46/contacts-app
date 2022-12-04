import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Alert } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ContactCard from '../components/ContactCard';
import '../style.css';

export default function Home() {
  const [allContexts, setAllContacts] = useState([]);

  useEffect(() => {
    const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
    setAllContacts(existingContacts);
  }, []);

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    console.info(searchQuery);
  };

  const deleteContact = (contact) => {
    const confirm = window.confirm(
      `Are you sure you want to delete the contact: ${contact?.fullName}`
    );
    if (confirm) {
      if (allContexts?.length) {
        const toDeleteContact = allContexts?.filter(
          (prevContact) => prevContact.id != contact?.id
        );
        localStorage.setItem('contact-list', JSON.stringify(toDeleteContact));
        const existingContacts = JSON.parse(
          localStorage.getItem('contact-list')
        );
        setAllContacts(existingContacts);
      }
    }
  };

  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col>
          <Form.Input placeholder="Search Contact" onChange={handleChange} />
        </Col>
        <Col className="d-flex justify-content-end">
          <Link to="/add-new-contact">
            <Button success>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              New Contact
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {allContexts?.length ? (
            <ContactCard contacts={allContexts} deleteContact={deleteContact} />
          ) : (
            <Alert info>You have no contacts currently.</Alert>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}
