import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={onAdd}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
