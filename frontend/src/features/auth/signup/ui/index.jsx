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
import { signupApi } from '../api/signup';
import { SignupValidationSchema } from '../model/validation-schema';

export const SignupForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignup = async (values, { setErrors }) => {
    try {
      const signupBody = {
        username: values.username,
        password: values.password,
      };
      const response = await signupApi(signupBody);
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
        initialValues={{ username: '', password: '', confirm: '' }}
        onSubmit={handleSignup}
        validationSchema={SignupValidationSchema}
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
                  {t('signup.signup')}
                </Typo>
              </MotionLayout>

              <Input
                type='text'
                name='username'
                autoComplete='off'
                isInvalid={!!errors.username}
                errorMessage={errors.username}
                size='lg'
                classNames={{ inputWrapper: '!bg-default' }}
                placeholder={t('signup.username')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
                autoFocus
              />

              <PasswordInput
                type='password'
                name='password'
                autoComplete='new-password'
                isInvalid={!!errors.password}
                errorMessage={errors.password}
                size='lg'
                classNames={{ inputWrapper: '!bg-default' }}
                placeholder={t('password')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
              />

              <PasswordInput
                type='confirm'
                name='confirm'
                autoComplete='new-password'
                isInvalid={errors.confirm}
                errorMessage={errors.confirm}
                size='lg'
                classNames={{ inputWrapper: '!bg-default' }}
                placeholder={t('signup.confirm_password')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm}
                required
              />

              <AnimatePresence>
                {errors.message === 'Request failed with status code 401' && (
                  <ErrorBlock>{t('error')}</ErrorBlock>
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
                  {t('signup.signup_action')}
                </Button>

                <Typo tag='h3' weight={600} size={16} className='mt-6'>
                  <span className='opacity-50'>
                    {t('signup.have_account')}
                    {' '}
                  </span>
                  <Link to='/login'>{t('signup.login')}</Link>
                  <br />
                </Typo>
              </MotionLayout>
            </LayoutGroup>
          </form>
        )}
      </Formik>
    </Flex>
  );
};
