import React from 'react';
import './style.css';

import { Container, Row, Col, Form, Button } from 'bootstrap-4-react';
import LayoutContainer from './layout/LayoutContainer';
import ContactCard from './components/ContactCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fasPlus } from '@fortawesome/free-regular-svg-icons';

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
              <FontAwesomeIcon icon={fasPlus} />
              New Contact
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </LayoutContainer>
  );
}
