import { Flex } from 'shared/ui/primitives/flex';
import { ChatsBar } from 'widgets/chat/chats-bar';
import { MessagesBar } from 'widgets/chat/messages-list';

export const HomePage = () => {
  return (
    <Flex className='w-full h-[calc(100dvh-64px)]' gap={0}>
      <ChatsBar />
      <MessagesBar />
    </Flex>
  );
};
