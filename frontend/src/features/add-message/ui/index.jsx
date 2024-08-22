/* eslint-disable jsx-a11y/no-autofocus */

import { useAddMessageMutation } from 'entities/message/model/messages-store';
import { useMessengerStore } from 'entities/messenger';
import { useEffect, useRef, useState } from 'react';
import { MotionLayout } from 'shared/ui/motion-layout';
import { Input } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { SendMessage } from './button';

export const AddMessageInput = ({ isLoading }) => {
  const { activeChat } = useMessengerStore();
  const { t } = useTranslation();

  const inputRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');
  const [addMessage, { isLoading: isLoadingMessage }] = useAddMessageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.length > 1024 || newMessage.length === 0) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    const username = localStorage.getItem('username');

    try {
      await addMessage({
        body: newMessage,
        channelId: activeChat.id,
        username,
      }).unwrap();

      setNewMessage('');
    } catch {
      toast.error(t('project.networkError'));
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeChat]);

  return (
    <MotionLayout
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className='w-full max-w-[800px] mx-auto'
    >
      <form onSubmit={handleSubmit} action='submit'>
        <Input
          ref={inputRef}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className='flex-shrink-0 mb-6'
          classNames={{ inputWrapper: '!bg-default shadow-base' }}
          size='lg'
          name='message'
          radius='full'
          autoComplete='off'
          aria-label={t('chat.newMessage')}
          placeholder={t('chat.enterMessage')}
          endContent={(
            <SendMessage
              message={newMessage}
              isLoading={isLoadingMessage || isLoading}
            />
          )}
        />
      </form>
    </MotionLayout>
  );
};
