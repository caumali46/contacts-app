const EmptyErrMessage = '* This field cannot be empty';
const emailErrMessage = '* Contact with the same email address already exist.';
const telephoneErrorMessage =
  '* Contact with the same telephone number already exist.';

const handleValidationOnChange = (props) => {
  const { inputValue, field, errors, setErrors } = props;
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

export default handleValidationOnChange;
