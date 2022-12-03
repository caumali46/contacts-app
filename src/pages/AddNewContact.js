import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Container, Row, Col, Form, Card, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function AddNewContact() {
  const [fieldValues, setFieldValues] = useState({
    fullName: '',
    password: '',
    telephone: '',
  });

  const handleChange = (e) => {
    const id = uuid();
    setFieldValues((prev) => ({
      ...prev,
      id,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={onSubmit}>
              <Form.Group className="required">
                <Row className="pt-4">
                  <Form.LabelCol
                    col="sm-2"
                    className="text-right"
                    htmlFor="fullName"
                  >
                    Full Name
                  </Form.LabelCol>
                  <Col col="sm-10">
                    <Form.Input
                      type="name"
                      name="fullName"
                      placeholder="Name"
                      id="fullName"
                      onChange={handleChange}
                    />
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
                      name="password"
                      placeholder="Password"
                      id="inputPassword"
                      onChange={handleChange}
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
                      name="telephone"
                      placeholder="Telephone"
                      id="telephone"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col col="sm-12" className="d-flex justify-content-end mt-3">
                    <Button default type="button" className="text-danger mr-2">
                      <FontAwesomeIcon icon={faXmark} className="mr-2" />
                      Cancel
                    </Button>
                    <Button success type="submit">
                      <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />
                      Save
                    </Button>
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
