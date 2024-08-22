import { Button } from '@nextui-org/react';
import { useMessengerStore } from 'entities/messenger';
import { FaLock } from 'react-icons/fa';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';
import filter from 'leo-profanity';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const ChatCard = ({ chat, onPress, settings }) => {
  const { messages, activeChat } = useMessengerStore();

  const isChatActive = chat.id === activeChat.id;

  const chatMessages = messages.filter(
    ({ channelId }) => channelId === chat.id,
  );

  return (
    <Button
      key={chat.id}
      size='lg'
      onPress={onPress}
      color={isChatActive ? 'secondary' : 'default'}
      className='h-[78px] shadow-medium p-3 text-start rounded-2xl items-start justify-start flex-shrink-0'
    >
      <Flex>
        <Flex col gap={2}>
          <Flex className='justify-between' gap={1}>
            <Flex gap={2}>
              <Typo
                size={16}
                weight={600}
                className={`leading-3 mt-[1px] ${
                  isChatActive && 'text-secondary-foreground'
                }`}
              >
                <span># </span>
                {filter.clean(chat.name)}
              </Typo>
              <PiMegaphoneSimpleBold
                size={14}
                opacity={0.5}
                className={`mt-[1px] ${
                  isChatActive && 'text-secondary-foreground'
                }`}
              />
              {!chat.removable && (
                <FaLock
                  size={12}
                  opacity={0.5}
                  className={`mt-[2px] ${
                    isChatActive && 'text-secondary-foreground'
                  }`}
                />
              )}
            </Flex>
            {chat.removable && settings}
          </Flex>

          {chatMessages.length > 0 ? (
            <Typo
              size={14}
              weight={500}
              opacity={0.5}
              className={`leading-4 line-clamp-2 text-wrap break-all ${
                isChatActive && 'text-secondary-foreground'
              }`}
            >
              <span>
                {chatMessages.at(-1).username}
                :
                {' '}
              </span>
              <span>{filter.clean(chatMessages.at(-1).body)}</span>
            </Typo>
          ) : (
            <Typo
              size={14}
              weight={500}
              opacity={0.5}
              className={`leading-4 line-clamp-2 text-wrap italic ${
                isChatActive && 'text-secondary-foreground'
              }`}
            >
              Нет сообщений
            </Typo>
          )}
        </Flex>
      </Flex>
    </Button>
  );
};
