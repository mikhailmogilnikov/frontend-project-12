import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from '@nextui-org/react';
import { useMessengerStore } from 'entities/messenger';
import { useState } from 'react';
import {
  PiGearFineBold,
  PiPencilSimpleBold,
  PiTrashBold,
} from 'react-icons/pi';
import { EditChatModal } from '../edit-chat';
import { DeleteChatModal } from '../delete-chat';

export const ChatSettingsDropdown = ({ chat }) => {
  const { activeChat } = useMessengerStore();

  const [isPressedEdit, setIsPressedEdit] = useState(false);
  const [isPressedDelete, setIsPressedDelete] = useState(false);

  const isChatActive = chat.id === activeChat.id;

  return (
    <>
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
            <span className='visually-hidden'>Управление каналом</span>
            <PiGearFineBold size={16} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='selector'>
          <DropdownItem
            onPress={() => setIsPressedEdit(true)}
            variant='faded'
            startContent={<PiPencilSimpleBold />}
          >
            Переименовать
          </DropdownItem>

          <DropdownItem
            onPress={() => setIsPressedDelete(true)}
            color='danger'
            variant='flat'
            className='text-danger'
            startContent={<PiTrashBold />}
          >
            Удалить
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <EditChatModal
        chat={chat}
        isPressedEdit={isPressedEdit}
        setIsPressedEdit={setIsPressedEdit}
      />
      <DeleteChatModal
        chat={chat}
        isPressedDelete={isPressedDelete}
        setIsPressedDelete={setIsPressedDelete}
      />
    </>
  );
};
