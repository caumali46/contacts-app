import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ContactCard from '../components/ContactCard';
import '../style.css';

export default function Home() {
  return (
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
          <ContactCard />
        </Col>
      </Row>
    </React.Fragment>
  );
}
