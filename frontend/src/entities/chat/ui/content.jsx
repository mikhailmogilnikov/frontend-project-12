/* eslint-disable */
import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';
import filter from 'leo-profanity';
import { PiMegaphoneSimpleBold } from 'react-icons/pi';
import { FaLock } from 'react-icons/fa';

export const ChatContent = ({
  isChatActive, chat, chatMessages, settings,
}) => {
  return (
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
            {/* <span>{filter.clean(chatMessages.at(-1).body)}</span> */}
            <span className='italic'>Новое сообщение</span>
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
  );
};
