import { Spinner } from '@nextui-org/react';
import { ChatCard } from 'entities/chat';
import { useLayoutEffect } from 'react';
import { useMessengerStore } from 'shared/lib/hooks/use-messenger-store';
import { useGetMessagesQuery } from 'widgets/chat/messages-list';

export const ChatsList = ({ chats }) => {
  const { activeChat, setActiveChat } = useMessengerStore();
  const { data, isLoading } = useGetMessagesQuery();

  useLayoutEffect(() => {
    setActiveChat(chats[0]);
  }, []);

  const handlePress = (chat) => () => {
    setActiveChat(chat);
  };

  if (!activeChat || isLoading) return <Spinner />;

  console.log(data);

  return chats.map((chat) => (
    <ChatCard key={chat.id} chat={chat} onPress={handlePress(chat)} />
  ));
};
