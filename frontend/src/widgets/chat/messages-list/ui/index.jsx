import { Input, ScrollShadow, Spinner } from '@nextui-org/react';
import { SendMessage } from 'features/send-message';
import { Flex } from 'shared/ui/primitives/flex';
import { useGetMessagesQuery } from '../model/messages-store';

export const MessagesList = () => {
  const { data, isLoading } = useGetMessagesQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Flex center col tag='section' className='px-4'>
      <Flex col className='w-full max-w-[800px] h-full'>
        <ScrollShadow
          orientation='vertical'
          className='flex flex-col-reverse h-full'
        >
          {isLoading ? <Spinner /> : 'message'}
        </ScrollShadow>
        <form onSubmit={handleSubmit} action='submit'>
          <Input
            isDisabled={isLoading}
            className='flex-shrink-0 mb-6'
            classNames={{ inputWrapper: '!bg-default shadow-base' }}
            size='lg'
            radius='full'
            placeholder='Введите сообщение...'
            endContent={<SendMessage />}
          />
        </form>
      </Flex>
    </Flex>
  );
};
