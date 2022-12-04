const EmptyErrMessage = '* This field cannot be empty';
const emailErrMessage = '* Contact with the same email address already exist.';
const telephoneErrorMessage =
  '* Contact with the same telephone number already exist.';

const setErrorFunction = (callback, field) => {
  return callback((prev) => {
    const { [field]: remove, ...rest } = prev;
    return rest;
  });
};

const handleValidationOnChange = (props) => {
  const {
    inputValue,
    field,
    setErrors,
    isEditPage = false,
    prevValues,
  } = props;
  let Bool = inputValue === '' || inputValue === null ? true : false;

  if (Bool) {
    setErrors((prev) => ({
      ...prev,
      [field]: EmptyErrMessage,
    }));
  } else {
    if (isEditPage) {
      const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
      const removePrevValue = existingContacts?.length
        ? existingContacts?.filter(
            (contact) => contact[field] !== prevValues[field]
          )
        : [];
      const findDuplidate = removePrevValue.filter(
        (contact) => contact[field] == inputValue
      );
      if (findDuplidate?.length) {
        setErrors((prev) => {
          const { [field]: remove, ...rest } = prev;
          if (field === 'email') {
            return { ...prev, email: emailErrMessage };
          } else if (field === 'telephone') {
            return { ...prev, telephone: telephoneErrorMessage };
          }
          return prev;
        });
      } else {
        setErrorFunction(setErrors, field);
      }
    } else {
      const existingContacts = JSON.parse(localStorage.getItem('contact-list'));
      if (existingContacts?.length) {
        setErrors((prev) => {
          const { [field]: remove, ...rest } = prev;
          if (field === 'email') {
            const sameEmail = existingContacts.filter(
              (contact) => contact.email === inputValue
            );
            if (sameEmail.length) {
              return { ...prev, email: emailErrMessage };
            }
            return rest;
          } else if (field === 'telephone') {
            const sameTelephone = existingContacts.filter(
              (contact) => contact.telephone === inputValue
            );
            if (sameTelephone.length) {
              return { ...prev, telephone: telephoneErrorMessage };
            }
            return rest;
          }
          return prev;
        });
      } else {
        setErrorFunction(setErrors, field);
      }
    }
  }
  return !Bool;
};

export default handleValidationOnChange;
