import * as yup from 'yup';

export const AddChatValidationSchema = (uniqueValidation) => yup.object().shape({
  channel: yup
    .string()
    .min(3, 'Название канала должно содержать не менее 3 символов')
    .max(20, 'Название канала должно содержать не более 20 символов')
    .required('Название канала обязательно')
    .test({
      name: 'test',
      message: 'Название канала должно быть уникальным',
      test: uniqueValidation,
    }),
});
