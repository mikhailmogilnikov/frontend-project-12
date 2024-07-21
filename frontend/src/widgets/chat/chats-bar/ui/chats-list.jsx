import { Spinner } from '@nextui-org/react';
import { ChatCard } from 'entities/chat';
import { useGetMessagesQuery } from 'entities/message';
import { useMessengerStore } from 'entities/messenger';
import { ChatSettingsDropdown } from 'features/configure-chat';

import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const ChatsList = () => {
  const { activeChat, setActiveChat, chats } = useMessengerStore();
  const { isLoading } = useGetMessagesQuery();

  const handlePress = (chat) => () => {
    setActiveChat(chat);
  };

  if (!activeChat || isLoading) return <Spinner />;

  if (chats.length === 0) {
    return (
      <Flex>
        <Typo>Чаты отсутствуют</Typo>
      </Flex>
    );
  }

  return chats.map((chat) => (
    <ChatCard
      key={chat.id}
      chat={chat}
      onPress={handlePress(chat)}
      settings={<ChatSettingsDropdown chat={chat} />}
    />
  ));
};
