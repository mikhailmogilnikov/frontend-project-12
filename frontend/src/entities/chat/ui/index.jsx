import { Button } from '@nextui-org/react';
import { useMessengerStore } from 'entities/messenger';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const ChatCard = ({ chat, onPress }) => {
  const { messages, activeChat } = useMessengerStore();

  const isChatActive = chat.id === activeChat.id;

  const chatMessages = messages.filter(
    ({ channelId }) => channelId === chat.id,
  );

  console.log(chatMessages);

  return (
    <Button
      key={chat.id}
      size='lg'
      onPress={onPress}
      color={isChatActive ? 'secondary' : 'default'}
      className='h-[78px] shadow-medium p-3 text-start rounded-2xl items-start justify-start'
    >
      <Flex>
        <Flex col gap={2}>
          <Flex gap={1}>
            <PiMegaphoneSimpleBold
              className={`${isChatActive && 'text-secondary-foreground'}`}
            />
            <Typo
              size={16}
              weight={600}
              className={`leading-3 mt-[1px] ${
                isChatActive && 'text-secondary-foreground'
              }`}
            >
              {chat.name}
            </Typo>
          </Flex>

          {chatMessages.length > 0 ? (
            <Typo
              size={14}
              weight={500}
              opacity={0.5}
              className={`leading-4 line-clamp-2 text-wrap ${
                isChatActive && 'text-secondary-foreground'
              }`}
            >
              <span>
                {chatMessages.at(-1).username}
                :
                {' '}
              </span>
              <span>{chatMessages.at(-1).body}</span>
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
