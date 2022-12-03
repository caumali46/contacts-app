import React, { useRef } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function AddNewContact() {
  const fullNameRef = useRef();
  const passWordRef = useRef();
  const telephoneNameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(fullNameRef.current);
    // console.log(passWordRef.current.value);
    // console.log(telephoneNameRef.current.value);
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
                      // ref={fullNameRef}
                      type="name"
                      placeholder="Name"
                      id="fullName"
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
                      ref={passWordRef}
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
                      ref={telephoneNameRef}
                      type="name"
                      placeholder="Telephone"
                      id="telephone"
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
