import { Button } from '@nextui-org/react';
import { PiCaretRightBold } from 'react-icons/pi';

export const SendMessage = ({ message, isLoading }) => {
  return (
    <Button
      isDisabled={!message.length}
      type='submit'
      color='secondary'
      isIconOnly
      radius='full'
      className='w-8 h-8 min-w-8 -mr-2'
      isLoading={isLoading}
    >
      <PiCaretRightBold size={20} />
    </Button>
  );
};
