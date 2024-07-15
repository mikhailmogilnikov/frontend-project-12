import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const MessageBubble = ({ message }) => {
  const myUsername = localStorage.getItem('username');

  const isOwnMessage = message.username === myUsername;

  return (
    <Flex col className={`max-w-[800px] mx-auto ${isOwnMessage && 'items-end'}`} gap={0}>
      <Typo weight={600} size={14} opacity={0.5}>
        {message.username}
      </Typo>
      <Flex
        wrap
        className='w-fit max-w-[90%] h-min bg-primary px-3 py-1 rounded-2xl overflow-hidden break-words'
        editable
      >
        <Typo className='text-wrap !break-all text-primary-foreground select-text'>
          {message.body}
        </Typo>
      </Flex>
    </Flex>
  );
};
