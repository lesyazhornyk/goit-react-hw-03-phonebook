import { Formik } from 'formik';
import { StyledForm, StyledField } from './ContactForm.styled';

const ContactForm = ({ onSubmitForm }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmitForm(values.name, values.number);
        resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledField name="name" type="text" required />
        <label htmlFor="number">Number</label>
        <StyledField name="number" type="tel" required />
        <button type="submit">Add Contact</button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
