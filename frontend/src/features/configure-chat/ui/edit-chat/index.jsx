/* eslint-disable */
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import { useEffect } from 'react';
import { ModalVariants } from 'shared/config/animation-variants';
import { EditChatModalContent } from './modal-content';

export const EditChatModal = ({ chat, isPressedEdit, setIsPressedEdit }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isPressedEdit) {
      onOpen();
    }
  }, [isPressedEdit]);

  useEffect(() => {
    if (!isOpen) {
      setIsPressedEdit(false);
    }
  }, [isOpen]);

  return (
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
        {(onClose) => <EditChatModalContent onClose={onClose} chat={chat} />}
      </ModalContent>
    </Modal>
  );
};
