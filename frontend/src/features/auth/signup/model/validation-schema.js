import * as yup from 'yup';

export const SignupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Имя пользователя обязательно')
    .min(3, 'Имя пользователя должно содержать не менее 3 символов')
    .max(20, 'Имя пользователя должно содержать не более 20 символов'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
  confirm: yup
    .string()
    .required('Подтверждение пароля обязательно')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
});
