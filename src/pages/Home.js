import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bootstrap, { Row, Col, Form, Button, Alert } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ContactCard from '../components/ContactCard';
import ContactListContext from '../layout/ContactListContext';
import '../style.css';

export default function Home() {
  const [allContexts, setAllContacts] = useState([]);
  const contextData = {
    contacts: allContexts,
  };

  useEffect(() => {
    const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
    setAllContacts(existingContacts);
  }, []);

  const deleteContact = (contact) => {
    if (allContexts?.length) {
      const toDeleteContact = allContexts?.filter(
        (prevContact) => prevContact.id != contact?.id
      );
      localStorage.setItem('contact-list', JSON.stringify(toDeleteContact));
      const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
      setAllContacts(existingContacts);
      // Bootstrap.modal('#deleteModal', { show: false });
      // document.getElementsByClassName('modal-backdrop').style.display = 'none';
      // console.info(document.getElementsByClassName('modal-backdrop'));
    }
  };
  // var myModal = new Bootstrap.Modal(document.getElementById('deleteModal'), {
  //   show: false,
  // });
  // console.info(myModal);
  // console.info(myModal.show());
  return (
    <ContactListContext.Provider value={contextData}>
      <React.Fragment>
        <Row className="mb-4">
          <Col>
            <Form.Input placeholder="Search Contact" />
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
              />
            ) : (
              <Alert info>You have no contacts currently.</Alert>
            )}
          </Col>
        </Row>
      </React.Fragment>
    </ContactListContext.Provider>
  );
}
