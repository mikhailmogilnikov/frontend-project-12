import { useState } from 'react';
import { Flex } from 'shared/ui/primitives/flex';
import { ChatsBar } from 'widgets/chat/chats-bar';
import { MessagesList } from 'widgets/chat/messages-list/ui';

export const HomePage = () => {
  const [activeChat, setActiveChat] = useState(0);

  return (
    <Flex className='w-full h-[calc(100dvh-64px)]' gap={0}>
      <ChatsBar activeChat={activeChat} setActiveChat={setActiveChat} />
      <MessagesList activeChat={activeChat} />
    </Flex>
  );
};
