import { Button } from '@nextui-org/react';
import { PiPlusCircleBold } from 'react-icons/pi';

export const AddChatButton = () => {
  return (
    <Button className='font-medium shadow-base'>
      <PiPlusCircleBold size={18} />
      Добавить чат
    </Button>
  );
};
