import {
  Button, Modal, ModalContent, useDisclosure,
} from '@nextui-org/react';
import { PiPlusCircleBold } from 'react-icons/pi';
import { ModalVariants } from 'shared/config/animation-variants';
import { useTranslation } from 'react-i18next';
import { AddChatModalContent } from './modal';

export const AddChatButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Button
        fullWidth
        className='font-medium shadow-base flex-shrink-0'
        onPress={onOpen}
      >
        <PiPlusCircleBold size={18} />
        {t('addChat.title')}
      </Button>
      <Modal
        backdrop='blur'
        classNames={{
          base: 'bg-background border-1 border-white/10 rounded-b-none rounded-t-3xl sm:rounded-3xl shadow-lg m-0',
          closeButton: 'hidden',
        }}
        isOpen={isOpen}
        motionProps={ModalVariants}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => <AddChatModalContent onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
};
