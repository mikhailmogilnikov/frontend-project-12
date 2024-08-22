/* eslint-disable functional/no-try-statement */
import {
  Button, Input, ModalBody, ModalHeader,
} from '@nextui-org/react';
import { ChatValidationSchema, useAddChatMutation } from 'entities/chat';
import { useMessengerStore } from 'entities/messenger';
import { Formik } from 'formik';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';
import { uniqueNameValidation } from 'shared/lib/utils/unique-value-validation';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const AddChatModalContent = ({ onClose }) => {
  const { chats, setActiveChat } = useMessengerStore();
  const { t } = useTranslation();
  const [addChat] = useAddChatMutation();

  const handleCreateChannel = async ({ channel }, { setSubmitting }) => {
    const newChat = { name: channel };
    try {
      const createdChat = await addChat(newChat).unwrap();
      setActiveChat(createdChat);
      toast.success(t('addChat.success'));
    } catch {
      toast.error(t('project.networkError'));
    }
    setSubmitting(false);
    onClose();
  };

  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h2 className='text-xl p-2 pb-0 pt-3'>{t('addChat.title')}</h2>
      </ModalHeader>
      <Formik
        initialValues={{ channel: '' }}
        onSubmit={handleCreateChannel}
        validateOnBlur={false}
        validationSchema={ChatValidationSchema(uniqueNameValidation(chats))}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Input
                size='lg'
                autoFocus
                autoComplete='new-password'
                id='channel'
                name='channel'
                classNames={{ inputWrapper: '!bg-default' }}
                placeholder=' '
                label={t('addChat.placeholder')}
                labelPlacement='inside'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.channel}
                required
              />

              {errors.channel && (
                <Flex className='px-4 py-3 bg-danger/20  rounded-large'>
                  <Typo weight={500} className='text-danger'>
                    {t(`addChat.validation.${errors.channel}`)}
                  </Typo>
                </Flex>
              )}

              <p className='opacity-50 font-medium px-2 py-1'>
                {t('addChat.caption')}
              </p>
            </ModalBody>
            <div className='w-full flex gap-4 px-6 pb-6 pt-4'>
              <Button
                className='w-full shadow-base font-medium'
                color='default'
                size='lg'
                type='button'
                onPress={onClose}
              >
                {t('cancel')}
              </Button>
              <Button
                type='submit'
                isLoading={isSubmitting}
                className='w-full font-medium'
                color='primary'
                size='lg'
                variant='shadow'
              >
                {t('send')}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
