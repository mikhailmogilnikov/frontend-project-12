import { DropdownItem } from '@nextui-org/dropdown';
import { PiPencilSimpleBold } from 'react-icons/pi';

export const EditChatButton = () => {
  return (
    <DropdownItem
      onPress={() => {}}
      variant='faded'
      startContent={<PiPencilSimpleBold />}
    >
      Переименовать
    </DropdownItem>
  );
};
