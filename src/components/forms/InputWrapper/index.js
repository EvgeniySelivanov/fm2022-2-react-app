import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputWrapper = (props) => {
  const { name,className, ...rest } = props;
  return (
    <label className={className}>
      <Field name={name} {...rest} />
      <ErrorMessage component='span' name={name} />
    </label>
  );
}

export default InputWrapper;
