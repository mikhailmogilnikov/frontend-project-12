import {
  Button, Input, ModalBody, ModalHeader,
} from '@nextui-org/react';
import { useAddChatMutation } from 'entities/chat';
import { useMessengerStore } from 'entities/messenger';
import { Formik } from 'formik';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';
import { AddChatValidationSchema } from '../model/validation-schema';

export const AddChatModalContent = ({ onClose }) => {
  const { chats, setActiveChat } = useMessengerStore();
  const [addChat] = useAddChatMutation();

  const uniqueChatNameValidation = (value) => {
    const sameChatname = chats.find(({ name }) => name === value);
    return !sameChatname;
  };

  const handleCreateChannel = async ({ channel }, { setSubmitting }) => {
    const newChat = { name: channel };
    const newChatResponse = await addChat(newChat);
    setActiveChat(newChatResponse.data);
    setSubmitting(false);
    onClose();
  };

  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h2 className='text-xl p-2 pb-0 pt-3'>Создать новый канал</h2>
      </ModalHeader>
      <Formik
        initialValues={{ channel: '' }}
        onSubmit={handleCreateChannel}
        validationSchema={AddChatValidationSchema(uniqueChatNameValidation)}
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
                placeholder='Название канала'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.channel}
                required
              />

              {errors.channel && (
                <Flex className='px-4 py-3 bg-danger/20  rounded-large'>
                  <Typo weight={500} className='text-danger'>
                    {errors.channel}
                  </Typo>
                </Flex>
              )}

              <p className='opacity-50 font-medium px-2 py-1'>
                Канал создается публично и доступен всем пользователям чата.
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
                Отмена
              </Button>
              <Button
                type='submit'
                isLoading={isSubmitting}
                className='w-full font-medium'
                color='primary'
                size='lg'
                variant='shadow'
              >
                Cоздать
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
