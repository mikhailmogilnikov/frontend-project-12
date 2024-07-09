/* eslint-disable functional/no-try-statement */
/* eslint-disable functional/no-conditional-statement */

import { Button, Input } from '@nextui-org/react';
import { Formik } from 'formik';
import { Flex } from 'shared/ui/primitives/flex';
import { PasswordInput } from 'shared/ui/inputs/password-input';
import { Typo } from 'shared/ui/primitives/typography';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { MotionLayout } from 'shared/ui/motion-layout';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/login';

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Flex className='m-auto max-w-96'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          try {
            const response = await loginApi(values);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            navigate('/');
          } catch (e) {
            setErrors(e);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          errors,
        }) => (
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
            <LayoutGroup>
              <MotionLayout>
                <Typo tag='h2' weight={600} size={24} className='mb-2'>
                  Войти
                </Typo>
              </MotionLayout>

              <MotionLayout>
                <Input
                  type='text'
                  name='username'
                  isInvalid={errors.username}
                  size='lg'
                  classNames={{ inputWrapper: '!bg-default' }}
                  placeholder='Ваш ник'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  required
                />
              </MotionLayout>

              <MotionLayout>
                <PasswordInput
                  type='password'
                  name='password'
                  isInvalid={errors.username}
                  size='lg'
                  classNames={{ inputWrapper: '!bg-default' }}
                  placeholder='Пароль'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  required
                />
              </MotionLayout>

              <AnimatePresence>
                {errors.message === 'Request failed with status code 401' && (
                  <MotionLayout
                    initial={{ opacity: 0, filter: 'blur(24px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(24px)' }}
                    className='px-4 py-3 bg-danger/20 rounded-2xl'
                  >
                    <Typo className='text-danger'>
                      Неверные имя пользователя или пароль
                    </Typo>
                  </MotionLayout>
                )}
              </AnimatePresence>

              <MotionLayout>
                <Button
                  type='submit'
                  size='lg'
                  color='secondary'
                  variant='ghost'
                  fullWidth
                  className='mt-3 font-medium'
                  isSubmitting={isSubmitting}
                >
                  Войти
                </Button>
                <Typo tag='h3' weight={600} size={16} className='mt-6'>
                  <span className='opacity-50'>Нет аккаунта? </span>
                  <button type='button'>Зарегистрироваться.</button>
                  <br />
                </Typo>
                <Typo weight={600} size={16} opacity={0.5}>
                  Тестовые данные: admin admin.
                </Typo>
              </MotionLayout>
            </LayoutGroup>
          </form>
        )}
      </Formik>
    </Flex>
  );
};
