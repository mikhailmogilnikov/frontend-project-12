import { Button } from '@nextui-org/react';
import { PiCaretRightBold } from 'react-icons/pi';

export const SendMessage = () => {
  return (
    <Button
      type='submit'
      color='secondary'
      isIconOnly
      radius='full'
      className='w-8 h-8 min-w-8 -mr-2'
    >
      <PiCaretRightBold size={20} />
    </Button>
  );
};
