/* eslint-disable */
import { Spinner } from '@nextui-org/react';
import { Message } from 'entities/message';
import { useMessengerStore } from 'entities/messenger';
import { LayoutGroup } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const MessagesList = () => {
  const { messages, activeChat } = useMessengerStore();
  const { t } = useTranslation();

  if (!messages || !activeChat) {
    return <Spinner />;
  }

  const chatMessages = messages.filter(
    (message) => message.channelId === activeChat.id,
  );

  if (chatMessages.length === 0) {
    return (
      <Flex col center className='w-full h-full justify-center' gap={0}>
        <Typo weight={600}>{t('chat.noMessages')}</Typo>
        <Typo size={15} opacity={0.5} weight={600}>
          {t('chat.startDialog')}
        </Typo>
      </Flex>
    );
  }

  return (
    <LayoutGroup>
      {chatMessages.reverse().map((message, index) => {
        return <Message key={message.id} message={message} index={index} />;
      })}
    </LayoutGroup>
  );
};
