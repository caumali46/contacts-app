import React from 'react';
import './style.css';

import { Container, Row, Col, Form, Button } from 'bootstrap-4-react';

import LayoutContainer from './layout/LayoutContainer';

export default function App() {
  return (
    <LayoutContainer>
      <Container>
        <Row>
          <Col>
            <Form.Input placeholder="Search Contact" />
          </Col>
          <Col>
            <Button success>New Contact</Button>
          </Col>
        </Row>
      </Container>
    </LayoutContainer>
  );
}
