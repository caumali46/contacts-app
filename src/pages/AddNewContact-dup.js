import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { isEmpty } from 'lodash';
import { Container, Row, Col, Form, Card, Button } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function AddNewContact(props) {
  const { defaultValues, isEditPage = false } = props;
  const navigate = useNavigate();

  const defaultFields = {
    fullName: '',
    email: '',
    telephone: '',
  };
  const [fieldValues, setFieldValues] = useState(
    defaultValues || defaultFields
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleValidationOnChange(value, name);
    const id = uuid();
    setFieldValues((prev) => ({
      ...prev,
      id,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(errors)) {
      if (isEditPage !== true) {
        const currentContacts = JSON.parse(
          localStorage.getItem('contact-list')
        );
        const updatedValues = currentContacts?.length
          ? [...currentContacts, fieldValues]
          : [fieldValues];
        localStorage.setItem('contact-list', JSON.stringify(updatedValues));
        setFieldValues(defaultFields);
        navigate('/');
      } else {
        const currrentContacts = JSON.parse(
          localStorage.getItem('contact-list')
        );
        const findContact = currrentContacts?.length
          ? currrentContacts?.filter((contact) => contact.id == fieldValues?.id)
          : [];
        console.info(currrentContacts);
        console.info(fieldValues);
        console.info(findContact);
      }
    }
  };

  const handleValidationOnChange = (inputValue, field) => {
    const emailErrMessage =
      '* Contact with the same email address already exist.';
    const telephoneErrorMessage =
      '* Contact with the same telephone number already exist.';
    const EmptyErrMessage = '* This field cannot be empty';
    let Bool = inputValue === '' || inputValue === null ? true : false;

    if (Bool) {
      setErrors((prev) => ({
        ...prev,
        [field]: EmptyErrMessage,
      }));
    } else {
      let errors_ = errors;
      const existingContacts = JSON.parse(localStorage.getItem('contact-list'));

      if (existingContacts?.length) {
        if (field === 'email') {
          const sameEmail = existingContacts.filter(
            (contact) => contact.email === inputValue
          );
          if (sameEmail.length) {
            errors_ = {
              ...errors_,
              email: emailErrMessage,
            };
          } else {
            const { [field]: remove, ...rest } = errors;
            errors_ = rest;
          }
          setErrors(errors_);
        } else if (field === 'telephone') {
          const sameTelephone = existingContacts.filter(
            (contact) => contact.telephone === inputValue
          );
          if (sameTelephone.length) {
            errors_ = {
              ...errors_,
              telephone: telephoneErrorMessage,
            };
          } else {
            const { [field]: remove, ...rest } = errors;
            errors_ = rest;
          }
          setErrors(errors_);
        } else {
          setErrors((prev) => {
            const { [field]: remove, ...rest } = prev;
            return rest;
          });
        }
      } else {
        setErrors((prev) => {
          const { [field]: remove, ...rest } = prev;
          return rest;
        });
      }
    }
    return !Bool;
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
