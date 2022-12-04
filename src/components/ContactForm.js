import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm(props) {
  const { fieldValues, errors, handleChange, onSubmit } = props;

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
                      value={fieldValues.fullName}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.fullName}</small>
                  </Col>
                </Row>
                <Row className="pt-3">
                  <Form.LabelCol
                    col="sm-2"
                    className="text-right"
                    htmlFor="inputEmail"
                  >
                    Email
                  </Form.LabelCol>
                  <Col col="sm-10">
                    <Form.Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="inputEmail"
                      value={fieldValues.email}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.email}</small>
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
                      value={fieldValues.telephone}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.telephone}</small>
                  </Col>
                </Row>
                <Row>
                  <Col col="sm-12" className="d-flex justify-content-end mt-3">
                    <Link to="/">
                      <Button
                        default
                        type="button"
                        className="text-danger mr-2"
                      >
                        <FontAwesomeIcon icon={faXmark} className="mr-2" />
                        Cancel
                      </Button>
                    </Link>
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
