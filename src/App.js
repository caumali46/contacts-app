import React from 'react';
import './style.css';

import { Container, Row, Col, Form, Button } from 'bootstrap-4-react';
import LayoutContainer from './layout/LayoutContainer';
import ContactCard from './components/ContactCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <LayoutContainer>
      <Container>
        <Row>
          <Col>
            <Form.Input placeholder="Search Contact" />
          </Col>
          <Col>
            <Button success>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              New Contact
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactCard />
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </LayoutContainer>
  );
}
