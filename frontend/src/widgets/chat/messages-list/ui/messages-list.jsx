import { Spinner } from '@nextui-org/react';
import { MessageBubble } from 'entities/message';
import { useMessengerStore } from 'entities/messenger';
import { LayoutGroup } from 'framer-motion';
import { MotionLayout } from 'shared/ui/motion-layout';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const MessagesList = () => {
  const { messages, activeChat } = useMessengerStore();

  if (!messages || !activeChat) {
    return <Spinner />;
  }

  const chatMessages = messages.filter(
    (message) => message.channelId === activeChat.id,
  );

  if (chatMessages.length === 0) {
    return (
      <Flex col center className='w-full h-full justify-center' gap={0}>
        <Typo weight={600}>Сообщений нет</Typo>
        <Typo size={15} opacity={0.5} weight={600}>
          Начните диалог первым!
        </Typo>
      </Flex>
    );
  }

  return (
    <LayoutGroup>
      {chatMessages.reverse().map((message, index) => {
        const myUsername = localStorage.getItem('username');
        const isOwnMessage = message.username === myUsername;

        return (
          <MotionLayout
            key={message.id}
            initial={{ opacity: 0, x: isOwnMessage ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.01 }}
          >
            <MessageBubble message={message} />
          </MotionLayout>
        );
      })}
    </LayoutGroup>
  );
};
