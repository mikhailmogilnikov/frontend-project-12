import * as yup from 'yup';

export const SignupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('required')
    .min(3, 'min3')
    .max(20, 'min3'),
  password: yup
    .string()
    .required('required')
    .min(6, 'min6'),
  confirm: yup
    .string()
    .required('required')
    .oneOf([yup.ref('password'), null], 'samepass'),
});
