import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ContactForm from '../components/ContactForm';
import handleValidationOnChange from '../utils/handleValidationOnChange';

export default function EditContact(props) {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [errors, setErrors] = useState({});
  const [prevValues, setPrevValues] = useState({});
  const [fieldValues, setFieldValues] = useState({
    fullName: '',
    email: '',
    telephone: '',
  });

  const currrentContacts = JSON.parse(localStorage.getItem('contact-list'));
  const findContact = currrentContacts?.length
    ? currrentContacts?.filter((contact) => contact.id == id)
    : [];
  if (!id || !findContact?.length) {
    return navigate('/');
  }

  useEffect(() => {
    if (findContact?.length) {
      setPrevValues(findContact[0]);
      setFieldValues(findContact[0]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleValidationOnChange({
      isEditPage: true,
      inputValue: value,
      field: name,
      setErrors,
      prevValues,
    });
    setFieldValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(errors)) {
      const currrentContacts = JSON.parse(localStorage.getItem('contact-list'));
      const findContact = currrentContacts?.length
        ? currrentContacts?.filter((contact) => contact.id !== fieldValues?.id)
        : [];
      const combinedNewValues = [...findContact, fieldValues];
      localStorage.setItem('contact-list', JSON.stringify(combinedNewValues));
      navigate('/');
    }
  };

  return (
    <>
      <h5>
        Edit Contact: <b>{fieldValues?.fullName}</b>
      </h5>
      <ContactForm
        errors={errors}
        fieldValues={fieldValues}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </>
  );
}
