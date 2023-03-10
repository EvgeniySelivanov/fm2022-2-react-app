import React from 'react';
import { Form, Formik } from 'formik';
import { LOG_IN_SCHEMA } from '../../../utils/validationSchemas';
import InputWrapper from '../InputWrapper/index';
import styles from './LogInForm.module.scss';
import InputWrapperWithValidate from '../InputWrapperWithValidate';

const initialValues = {
  login: '',
  password: ''
};
const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.group();
    console.log(values);
    console.log(formikBag);
    console.groupEnd();
    formikBag.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={LOG_IN_SCHEMA}>
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={styles.form}>
            <InputWrapperWithValidate name='login' type="text" placeholder='your login' className={styles.labelValid} />
            <InputWrapper name='password' type='password' placeholder='your password' className={styles.label} />
            <input type='submit' value='SEND' />
          </Form>
        )
      }}
    </Formik>
  );

};

export default LogInForm;
