import { Flex } from 'shared/ui/primitives/flex';
import { Typo } from 'shared/ui/primitives/typography';

export const MessageBubble = ({ message }) => {
  const myUsername = localStorage.getItem('username');
  const isOwnMessage = message.username === myUsername;

  return (
    <Flex className={`${isOwnMessage && 'justify-end'}`}>
      <Flex
        wrap
        className='w-fit max-w-[90%] h-min bg-primary px-3 py-1 rounded-2xl overflow-hidden'
        editable
      >
        <Typo className='text-wrap break-all'>{message.body}</Typo>
      </Flex>
    </Flex>
  );
};
