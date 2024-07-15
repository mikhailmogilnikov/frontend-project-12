import { ScrollShadow, Spinner } from '@nextui-org/react';
import { Flex } from 'shared/ui/primitives/flex';
import { AddMessageInput } from 'features/add-message';
import { useGetMessagesQuery } from '../../../../entities/message/model/messages-store';
import { MessagesList } from './messages-list';

export const MessagesBar = () => {
  const { isLoading } = useGetMessagesQuery();

  return (
    <Flex center col tag='section' gap={0}>
      <ScrollShadow
        orientation='vertical'
        className='flex flex-col-reverse w-full h-full gap-1 px-4 py-8'
      >
        {isLoading ? <Spinner /> : <MessagesList />}
      </ScrollShadow>
      <Flex center className='px-4'>
        <AddMessageInput isLoading={isLoading} />
      </Flex>
    </Flex>
  );
};
