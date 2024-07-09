/* eslint-disable functional/no-conditional-statement */
import { Divider, Spinner } from '@nextui-org/react';
import { AddChatButton } from 'features/add-chat';
import { Flex } from 'shared/ui/primitives/flex';
import { useGetChatsQuery } from '../model/chats-store';

export const ChatsBar = () => {
  const { data, isLoading } = useGetChatsQuery();

  if (isLoading) {
    return (
      <Flex
        col
        className='w-full max-w-72 h-full border-r-1 border-divider p-4'
        tag='aside'
      >
        <Spinner />
      </Flex>
    );
  }

  console.log(data);

  return (
    <Flex
      col
      className='w-full max-w-72 h-full border-r-1 border-divider p-4'
      tag='aside'
    >
      <AddChatButton />
      <Divider className='-mx-4 w-[calc(100%+32px)]' />
    </Flex>
  );
};
