/* eslint-disable functional/no-try-statement */
/* eslint-disable functional/no-conditional-statement */

import { Button, Input } from '@nextui-org/react';
import { Formik } from 'formik';
import { Flex } from 'shared/ui/primitives/flex';
import { PasswordInput } from 'shared/ui/inputs/password-input';
import { Typo } from 'shared/ui/primitives/typography';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { MotionLayout } from 'shared/ui/motion-layout';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ErrorBlock } from 'shared/ui/error-block';
import { loginApi } from '../api/login';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (values, { setErrors }) => {
    try {
      const response = await loginApi(values);
      const { token, username } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      navigate(0);
    } catch (e) {
      setErrors(e);
    }
  };

  return (
    <Flex className='m-auto max-w-96'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validateOnBlur={false}
        onSubmit={handleLogin}
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
                  {t('login.enter')}
                </Typo>
              </MotionLayout>

              <MotionLayout>
                <Input
                  type='text'
                  name='username'
                  isInvalid={errors.username}
                  size='lg'
                  classNames={{ inputWrapper: '!bg-default' }}
                  placeholder={t('login.nickname')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  required
                  autoFocus
                />
              </MotionLayout>

              <MotionLayout>
                <PasswordInput
                  type='password'
                  name='password'
                  isInvalid={errors.username}
                  size='lg'
                  classNames={{ inputWrapper: '!bg-default' }}
                  placeholder={t('password')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  required
                />
              </MotionLayout>

              <AnimatePresence>
                {!!errors.response && (
                  <ErrorBlock>
                    {t(`login.errors.${errors.response.status}`)}
                  </ErrorBlock>
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
                  {t('login.enter')}
                </Button>

                <Typo tag='h3' weight={600} size={16} className='mt-6'>
                  <span className='opacity-50'>
                    {t('login.noAccount')}
                    {' '}
                  </span>
                  <Link to='/signup'>{t('login.register')}</Link>
                  <br />
                </Typo>

                <Typo weight={600} size={16} opacity={0.5}>
                  {t('login.testData')}
                  {' '}
                  admin admin.
                </Typo>
              </MotionLayout>
            </LayoutGroup>
          </form>
        )}
      </Formik>
    </Flex>
  );
};
