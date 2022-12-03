import React from 'react';
import { Container, Row, Col, Form, Card, Button } from 'bootstrap-4-react';

export default function AddNewContact() {
  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="required">
                <Row className="pt-3">
                  <Form.LabelCol
                    col="sm-2"
                    className="text-right"
                    htmlFor="fullName"
                  >
                    Full Name
                  </Form.LabelCol>
                  <Col col="sm-10">
                    <Form.Input type="name" placeholder="Name" id="fullName" />
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Form.LabelCol
                    col="sm-2"
                    className="text-right"
                    htmlFor="inputPassword"
                  >
                    Password
                  </Form.LabelCol>
                  <Col col="sm-10">
                    <Form.Input
                      type="password"
                      placeholder="Password"
                      id="inputPassword"
                    />
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Form.LabelCol
                    col="sm-2"
                    className="text-right"
                    htmlFor="telephone"
                  >
                    Telephone
                  </Form.LabelCol>
                  <Col col="sm-10">
                    <Form.Input
                      type="name"
                      placeholder="Telephone"
                      id="telephone"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
