import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  FormAddContacts,
  Label,
  Input,
  Thumb,
  ErrorElement,
  ButtonForm,
} from './ContactForm.styled';
import * as yup from 'yup';
import PropTypes from 'prop-types';

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('This field is required'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <ErrorElement>{message}</ErrorElement>;
      }}
    />
  );
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormAddContacts>
        <Label>
          Name
          <Thumb>
            <Input type="text" name="name" autoComplete="off" />
            <FormError name="name" />
          </Thumb>
        </Label>
        <Label>
          Number
          <Thumb>
            <Input type="tel" name="number" autoComplete="off" />
            <FormError name="number" />
          </Thumb>
        </Label>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormAddContacts>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
