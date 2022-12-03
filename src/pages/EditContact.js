import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'bootstrap-4-react';
import AddNewContact from './AddNewContact';

const EditContact = (props) => {
  const params = useParams();
  // const history = useHistory();
  const navigate = useNavigate();
  const { id } = params;

  const currrentContacts = JSON.parse(localStorage.getItem('contact-list'));
  const findContact = currrentContacts?.length
    ? currrentContacts?.filter((contact) => contact.id == id)
    : [];
  if (!id || !findContact?.length) {
    return navigate('/');
  }
  return <AddNewContact defaultValues={findContact[0]} isEditPage={true} />;
};
export default EditContact;
