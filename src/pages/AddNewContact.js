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
      const currentContacts = JSON.parse(
        localStorage.getItem('contact-list')
      );
      const updatedValues = currentContacts?.length
        ? [...currentContacts, fieldValues]
        : [fieldValues];
      localStorage.setItem('contact-list', JSON.stringify(updatedValues));
      setFieldValues(defaultFields);
      navigate('/');

      // const currrentContacts = JSON.parse(
      //   localStorage.getItem('contact-list')
      // );
      // const findContact = currrentContacts?.length
      //   ? currrentContacts?.filter((contact) => contact.id == fieldValues?.id)
      //   : [];
      // console.info(findContact);
      
    }
  };

  // const handleValidationOnChange = (inputValue, field) => {
  //   const emailErrMessage =
  //     '* Contact with the same email address already exist.';
  //   const telephoneErrorMessage =
  //     '* Contact with the same telephone number already exist.';
  //   const EmptyErrMessage = '* This field cannot be empty';
  //   let Bool = inputValue === '' || inputValue === null ? true : false;

  //   if (Bool) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       [field]: EmptyErrMessage,
  //     }));
  //   } else {
  //     let errors_ = errors;
  //     const existingContacts = JSON.parse(localStorage.getItem('contact-list'));

  //     if (existingContacts?.length) {
  //       if (field === 'email') {
  //         const sameEmail = existingContacts.filter(
  //           (contact) => contact.email === inputValue
  //         );
  //         if (sameEmail.length) {
  //           errors_ = {
  //             ...errors_,
  //             email: emailErrMessage,
  //           };
  //         } else {
  //           const { [field]: remove, ...rest } = errors;
  //           errors_ = rest;
  //         }
  //         setErrors(errors_);
  //       } else if (field === 'telephone') {
  //         const sameTelephone = existingContacts.filter(
  //           (contact) => contact.telephone === inputValue
  //         );
  //         if (sameTelephone.length) {
  //           errors_ = {
  //             ...errors_,
  //             telephone: telephoneErrorMessage,
  //           };
  //         } else {
  //           const { [field]: remove, ...rest } = errors;
  //           errors_ = rest;
  //         }
  //         setErrors(errors_);
  //       } else {
  //         setErrors((prev) => {
  //           const { [field]: remove, ...rest } = prev;
  //           return rest;
  //         });
  //       }
  //     } else {
  //       setErrors((prev) => {
  //         const { [field]: remove, ...rest } = prev;
  //         return rest;
  //       });
  //     }
  //   }
  //   return !Bool;
  // };

  return (
    <ContactForm
      errors={errors}
      fieldValues={fieldValues}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
