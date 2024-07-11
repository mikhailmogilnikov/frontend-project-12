import { ScrollShadow, Spinner } from '@nextui-org/react';
import { Flex } from 'shared/ui/primitives/flex';
import { AddMessageInput } from 'features/add-message';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { useMessengerStore } from 'entities/messenger';
import { useGetMessagesQuery } from '../../../../entities/message/model/messages-store';
import { MessagesList } from './messages-list';

export const MessagesBar = () => {
  const { isLoading } = useGetMessagesQuery();
  const { addNewMessage } = useMessengerStore();

  useEffect(() => {
    const socket = io('');

    const handleMessage = (payload) => {
      addNewMessage(payload);
    };

    socket.on('newMessage', handleMessage);

    return () => {
      socket.off('newMessage', handleMessage);
      socket.disconnect();
    };
  }, []);

  return (
    <Flex center col tag='section' className='px-4'>
      <Flex col className='w-full max-w-[800px] h-full' gap={0}>
        <ScrollShadow
          orientation='vertical'
          className='flex flex-col-reverse h-full gap-1 px-4 py-8'
        >
          {isLoading ? <Spinner /> : <MessagesList />}
        </ScrollShadow>
        <AddMessageInput isLoading={isLoading} />
      </Flex>
    </Flex>
  );
};
