import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { isEmpty } from 'lodash';
import ContactForm from '../components/ContactForm';
import handleValidationOnChange from '../utils/handleValidationOnChange';

export default function AddNewContact(props) {
  const { defaultValues } = props;
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
    handleValidationOnChange({
      inputValue: value,
      field: name,
      errors,
      setErrors,
    });
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
      const currentContacts = JSON.parse(localStorage.getItem('contact-list'));
      const updatedValues = currentContacts?.length
        ? [...currentContacts, fieldValues]
        : [fieldValues];
      localStorage.setItem('contact-list', JSON.stringify(updatedValues));
      setFieldValues(defaultFields);
      navigate('/');
    }
  };

  return (
    <>
      <h5>Add New Contact</h5>
      <ContactForm
        errors={errors}
        fieldValues={fieldValues}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </>
  );
}
