import { ScrollShadow, Spinner } from '@nextui-org/react';
import { Flex } from 'shared/ui/primitives/flex';
import { AddMessageInput } from 'features/add-message';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useGetMessagesQuery } from '../model/messages-store';
import { MessagesList } from './messages-list';

export const MessagesBar = () => {
  const { data, isLoading } = useGetMessagesQuery();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io('ws://localhost:3000');

    const handleMessage = (payload) => {
      setMessages((prevMessages) => [...prevMessages, payload]);
    };

    socket.on('newMessage', handleMessage);

    return () => {
      socket.off('newMessage', handleMessage);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  return (
    <Flex center col tag='section' className='px-4'>
      <Flex col className='w-full max-w-[800px] h-full' gap={0}>
        <ScrollShadow
          orientation='vertical'
          className='flex flex-col-reverse h-full gap-2 px-4 py-6'
        >
          {isLoading ? <Spinner /> : <MessagesList messages={messages} />}
        </ScrollShadow>
        <AddMessageInput isLoading={isLoading} />
      </Flex>
    </Flex>
  );
};
