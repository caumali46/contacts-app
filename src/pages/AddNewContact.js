import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Container, Row, Col, Form, Card, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function AddNewContact() {
  const defaultFields = {
    fullName: '',
    password: '',
    telephone: '',
  };
  const [fieldValues, setFieldValues] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    handleValidation(e.target.value, e.target.name);
    const id = uuid();
    setFieldValues((prev) => ({
      ...prev,
      id,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contact-list', JSON.stringify(fieldValues));
    setFieldValues(defaultFields);
  };

  const handleValidation = (inputValue, field) => {
    // let Bool = false;
    const isNull = inputValue === '' || inputValue === null;

    // if (isNull) {
    //   Bool = true;
    // }

    let Bool = isNull ? true : false;
    if (Bool) {
      setErrors((prev) => ({
        ...prev,
        [field]: '* This field cannot be empty',
      }));
    } else {
      setErrors((prev) => {
        const { [field]: remove, ...rest } = prev;
        return rest;
      });
    }
    return !Bool;
  };

  console.log(errors);
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
                    <small class="text-danger">{errors.fullName}</small>
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
                      value={fieldValues.password}
                      onChange={handleChange}
                    />
                    <small class="text-danger">{errors.password}</small>
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
                    <small class="text-danger">{errors.telephone}</small>
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
