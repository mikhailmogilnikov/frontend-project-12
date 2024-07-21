import { Button, ModalBody, ModalHeader } from '@nextui-org/react';
import { useRemoveChatMutation } from 'entities/chat';
import { useEffect } from 'react';

export const DeleteChatModalContent = ({ onClose, chat }) => {
  const [deleteChat, { isLoading }] = useRemoveChatMutation();

  const handleDeleteChannel = async (e) => {
    e.preventDefault();
    await deleteChat(chat.id);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleDeleteChannel(e);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h2 className='text-xl p-2 pb-0 pt-3'>Удалить канал</h2>
      </ModalHeader>

      <ModalBody>
        <p className='opacity-50 font-medium px-2 py-1'>
          Вы действительно хотите удалить канал &quot;
          {chat.name}
          &quot;? Это действие необратимо.
        </p>
      </ModalBody>
      <div className='w-full flex gap-4 px-6 pb-6 pt-4'>
        <Button
          className='w-full shadow-base font-medium'
          color='default'
          size='lg'
          type='button'
          onPress={onClose}
        >
          Отмена
        </Button>
        <Button
          isLoading={isLoading}
          className='w-full font-medium'
          color='danger'
          size='lg'
          variant='shadow'
          onPress={handleDeleteChannel}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};
