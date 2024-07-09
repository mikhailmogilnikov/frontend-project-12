import { Button } from '@nextui-org/react';
import { useMessengerStore } from 'shared/lib/hooks/use-messenger-store';
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const ChatCard = ({ chat, onPress }) => {
  const { activeChat } = useMessengerStore();

  const isChatActive = chat.id === activeChat.id;

  return (
    <Button
      key={chat.id}
      size='lg'
      onPress={onPress}
      color={isChatActive ? 'secondary' : 'default'}
      className='h-[74px] shadow-medium p-3 text-start rounded-2xl items-start justify-start'
    >
      <Flex>
        <Flex col gap={2}>
          <Typo
            size={16}
            weight={600}
            className={`leading-3 ${
              isChatActive && 'text-secondary-foreground'
            }`}
          >
            {chat.name}
          </Typo>
          <Typo
            size={13}
            weight={500}
            opacity={0.5}
            className={`leading-4 line-clamp-2 text-wrap ${
              isChatActive && 'text-secondary-foreground'
            }`}
          >
            Сообщение длинное тест сообщения в 2 строки я тестирую сообщение
            вфывф вфвыфвф
          </Typo>
        </Flex>
      </Flex>
    </Button>
  );
};
