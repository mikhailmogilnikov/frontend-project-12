import { Button, ModalBody, ModalHeader } from '@nextui-org/react';
import { useRemoveChatMutation } from 'entities/chat';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export const DeleteChatModalContent = ({ onClose, chat }) => {
  const [deleteChat, { isLoading }] = useRemoveChatMutation();
  const { t } = useTranslation();

  const handleDeleteChannel = async () => {
    try {
      await deleteChat(chat.id).unwrap();
      toast.success(t('deleteChat.success'));
    } catch {
      toast.error(t('project.networkError'));
    }
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
        <h2 className='text-xl p-2 pb-0 pt-3'>{t('deleteChat.title')}</h2>
      </ModalHeader>

      <ModalBody>
        <p className='opacity-50 font-medium px-2 py-1'>
          {t('deleteChat.caption')}
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
          {t('cancel')}
        </Button>
        <Button
          isLoading={isLoading}
          className='w-full font-medium btn-danger'
          color='danger'
          size='lg'
          variant='shadow'
          onPress={handleDeleteChannel}
        >
          {t('delete')}
        </Button>
      </div>
    </>
  );
};
