/* eslint-disable functional/no-conditional-statement */
import { Button, Input } from '@nextui-org/react';
import { Formik } from 'formik';
import { Flex } from 'shared/ui/flex';
import { PasswordInput } from 'shared/ui/inputs/password-input';
import { Typo } from 'shared/ui/typography';

export const LoginForm = () => {
  return (
    <Flex className='m-auto max-w-96'>
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values, handleChange, handleBlur, handleSubmit, isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
            <Typo weight={600} size={24} className='mb-2'>
              Войти
            </Typo>
            <Input
              type='text'
              name='name'
              size='lg'
              classNames={{ inputWrapper: '!bg-default' }}
              placeholder='Ваш ник'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
            />

            <PasswordInput
              type='password'
              name='password'
              size='lg'
              classNames={{ inputWrapper: '!bg-default' }}
              placeholder='Пароль'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
            />

            <Button
              type='submit'
              size='lg'
              color='secondary'
              variant='ghost'
              className='mt-3'
              disabled={isSubmitting}
            >
              Войти
            </Button>
            <Typo weight={600} size={16} className='mt-4'>
              <span className='opacity-50'>Нет аккаунта? </span>
              <button type='button'>Зарегистрироваться.</button>
            </Typo>
          </form>
        )}
      </Formik>
    </Flex>
  );
};
