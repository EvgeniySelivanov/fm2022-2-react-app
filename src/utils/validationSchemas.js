import * as Yup from 'yup';

export const TASK_SCHEMA=Yup.object({body:Yup.string().trim().min(5).max(40).required()});

export const NAME_SCHEMA = Yup
  .string('Must be string')
  .trim()
  .min(3, 'Must be more 4 letters')
  .max(15, 'Must be less 15 letters')
  .matches(/^[A-Z][a-z]{4,15}$/, 'Must be only latine  letter')
  .required('Required!');
export const PASS_SCHEMA = Yup
  .string()
  .trim()
  .min(8, 'Must be more 8 symbole')
  .max(16, 'Must be less 16 symbole')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/, 'Check password')
  .required('Required!');
export const LOG_IN_SCHEMA = Yup.object(
  {
    login: Yup
      .string('Must be string')
      .trim()
      .min(4, 'Must be more 4 letters')
      .max(20, 'Must be less 20 letters')
      .matches(/^[a-z]{4,15}$/, 'Must be only latine lowercase letter')
      .required('Required!'),
    password: PASS_SCHEMA
  }
);
export const SIGN_UP_SCHEMA = Yup.object(
  {
    firstName: NAME_SCHEMA,
    lastName: NAME_SCHEMA,
    email: Yup.string().email().required('Required'),
    password: PASS_SCHEMA,
    age: Yup.number().min(18).max(100).integer().required(),
    isMale: Yup.boolean().required()
  }
);
//gr3at@3wdsG