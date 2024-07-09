import { Input } from '@nextui-org/react';
import { SendMessage } from 'features/send-message';
import { useRef, useState } from 'react';
import { useMessengerStore } from 'shared/lib/hooks/use-messenger-store';
import { useAddMessageMutation } from 'widgets/chat/messages-list/model/messages-store';

export const AddMessageInput = ({ isLoading }) => {
  const { activeChat } = useMessengerStore();

  const inputRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');
  const [addMessage, { isLoading: isLoadingMessage }] = useAddMessageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.length > 50) {
      return;
    }

    const username = localStorage.getItem('username');
    await addMessage({ body: newMessage, channelId: activeChat.id, username });
    setNewMessage('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} action='submit'>
      <Input
        ref={inputRef}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        isDisabled={isLoading}
        className='flex-shrink-0 mb-6'
        classNames={{ inputWrapper: '!bg-default shadow-base' }}
        size='lg'
        autoFocus
        radius='full'
        placeholder='Введите сообщение...'
        endContent={
          <SendMessage message={newMessage} isLoading={isLoadingMessage} />
        }
      />
    </form>
  );
};
