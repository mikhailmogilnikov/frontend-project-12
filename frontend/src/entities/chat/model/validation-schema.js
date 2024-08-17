import * as yup from 'yup';

export const ChatValidationSchema = (uniqueValidation) => yup.object().shape({
  channel: yup
    .string()
    .required('required')
    .min(3, 'min')
    .max(20, 'max')
    .test({
      name: 'test',
      message: 'unique',
      test: uniqueValidation,
    }),
});
