import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Alert } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import ContactCard from '../components/ContactCard';
import '../style.css';

const emptyContacts = 'You have no contacts currently.';
const noResultsFound = 'No results found!';

export default function Home() {
  const [allContexts, setAllContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  useEffect(() => {
    const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
    if (existingContacts?.length < 1) {
      setWarningMessage(emptyContacts);
    }
    setAllContacts(existingContacts);
  }, []);

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
    const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
    const filterContact = existingContacts?.filter((contact) => {
      const { fullName, email, telephone } = contact;
      const lowerCase = searchQuery?.toLowerCase();
      return (
        fullName?.toLowerCase()?.includes(lowerCase) ||
        email?.toLowerCase()?.includes(lowerCase) ||
        telephone?.toLowerCase()?.includes(lowerCase)
      );
    });
    if (filterContact?.length < 1) {
      setWarningMessage(noResultsFound);
    }
    setAllContacts(filterContact);
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
      <h5>All Contacts</h5>
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
            <ContactCard
              contacts={allContexts}
              deleteContact={deleteContact}
              searchKeyWord={searchQuery}
            />
          ) : (
            <Alert info>
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              {warningMessage}
            </Alert>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
}
