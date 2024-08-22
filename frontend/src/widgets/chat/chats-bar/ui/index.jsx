/* eslint-disable */
import { Divider, ScrollShadow, Spinner } from '@nextui-org/react';
import { AddChatButton } from 'features/add-chat';
import { Flex } from 'shared/ui/primitives/flex';
import { useGetChatsQuery } from 'entities/chat';
import { ChatsList } from './chats-list';

export const ChatsBar = () => {
  const { isLoading } = useGetChatsQuery();

  if (isLoading) {
    return (
      <Flex
        col
        className='w-full max-w-80 h-full border-r-1 border-divider p-4 flex-shrink-0'
        tag='aside'
      >
        <Spinner />
      </Flex>
    );
  }

  return (
    <Flex
      col
      className='w-full max-w-80 h-full border-r-1 border-divider flex-shrink-0'
      tag='aside'
    >
      <Flex className='p-4 pb-0'>
        <AddChatButton />
      </Flex>

      <Divider />

      <ScrollShadow className='flex flex-col gap-4 p-4 -mt-4'>
        <ChatsList />
      </ScrollShadow>
    </Flex>
  );
};
