import { Button } from '@nextui-org/react';
import { useMessengerStore } from 'entities/messenger';

import { ChatContent } from './content';

export const ChatCard = ({ chat, onPress, settings }) => {
  const { messages, activeChat } = useMessengerStore();

  const isChatActive = chat.id === activeChat.id;

  const chatMessages = messages.filter(
    ({ channelId }) => channelId === chat.id,
  );

  if (isChatActive) {
    return (
      <button
        type='button'
        aria-label={chat.name}
        style={{ width: '100%' }}
        className='w-100 rounded-0 text-start text-truncate btn btn-secondary'
      >
        <ChatContent
          isChatActive={isChatActive}
          chat={chat}
          chatMessages={chatMessages}
          settings={settings}
        />
      </button>
    );
  }

  return (
    <Button
      key={chat.id}
      size='lg'
      onPress={onPress}
      color={isChatActive ? 'secondary' : 'default'}
      className='h-[78px] shadow-medium p-3 text-start rounded-2xl items-start justify-start flex-shrink-0'
    >
      <ChatContent
        isChatActive={isChatActive}
        chat={chat}
        chatMessages={chatMessages}
        settings={settings}
      />
    </Button>
  );
};
