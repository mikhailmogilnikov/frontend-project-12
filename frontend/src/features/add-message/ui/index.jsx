import { Input } from '@nextui-org/react';
import { useAddMessageMutation } from 'entities/message/model/messages-store';
import { useMessengerStore } from 'entities/messenger';
import { SendMessage } from 'features/send-message';
import { useEffect, useRef, useState } from 'react';
import { MotionLayout } from 'shared/ui/motion-layout';

export const AddMessageInput = ({ isLoading }) => {
  const { activeChat } = useMessengerStore();

  const inputRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');
  const [addMessage, { isLoading: isLoadingMessage }] = useAddMessageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.length > 1024) {
      return;
    }

    const username = localStorage.getItem('username');
    await addMessage({ body: newMessage, channelId: activeChat.id, username });
    setNewMessage('');

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
    >
      <form onSubmit={handleSubmit} action='submit'>
        <Input
          ref={inputRef}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          isDisabled={isLoading}
          className='flex-shrink-0 mb-6'
          classNames={{ inputWrapper: '!bg-default shadow-base' }}
          size='lg'
          name='message'
          radius='full'
          autoComplete='new-password'
          placeholder='Введите сообщение...'
          endContent={
            <SendMessage message={newMessage} isLoading={isLoadingMessage} />
          }
        />
      </form>
    </MotionLayout>
  );
};
