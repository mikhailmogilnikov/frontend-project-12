import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';

import { Button } from '@nextui-org/react';
import {
  PiGearFineBold,
  PiPencilSimpleBold,
  PiTrashBold,
} from 'react-icons/pi';

export const ChatSettings = ({ isChatActive }) => {
  return (
    <Dropdown backdrop='blur' placement='bottom'>
      <DropdownTrigger>
        <Button
          isIconOnly
          size='sm'
          radius='full'
          aria-label='Оформление'
          color={isChatActive ? 'secondary' : 'default'}
          className='min-h-0 min-w-0 w-4 h-4 bg-transparent'
        >
          <PiGearFineBold size={16} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='selector'>
        <DropdownItem
          onPress={() => {}}
          variant='faded'
          startContent={<PiPencilSimpleBold />}
        >
          Переименовать
        </DropdownItem>
        <DropdownItem
          onPress={() => {}}
          color='danger'
          variant='flat'
          className='text-danger'
          startContent={<PiTrashBold />}
        >
          Удалить
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
