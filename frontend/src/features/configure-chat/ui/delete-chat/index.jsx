/* eslint-disable */
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import { useEffect } from 'react';
import { ModalVariants } from 'shared/config/animation-variants';
import { DeleteChatModalContent } from './modal-content';

export const DeleteChatModal = ({ chat, isPressedDelete, setIsPressedDelete }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isPressedDelete) {
      onOpen();
    }
  }, [isPressedDelete]);

  useEffect(() => {
    if (!isOpen) {
      setIsPressedDelete(false);
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
        {(onClose) => <DeleteChatModalContent onClose={onClose} chat={chat} />}
      </ModalContent>
    </Modal>
  );
};
