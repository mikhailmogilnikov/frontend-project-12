import {
  Button, Input, ModalBody, ModalHeader,
} from '@nextui-org/react';

export const AddChatModalContent = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    onClose();
  };

  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h2 className='text-xl p-2 pb-0 pt-3'>Создать новый канал</h2>
      </ModalHeader>
      <form action='submit' onSubmit={handleSubmit}>
        <ModalBody>
          <Input
            size='lg'
            autoFocus
            classNames={{ inputWrapper: '!bg-default' }}
            placeholder='Название канала'
          />
          <p className='opacity-50 font-medium px-2 py-1'>Создать канал</p>
        </ModalBody>
        <div className='w-full flex gap-4 px-6 pb-6 pt-4'>
          <Button
            className='w-full shadow-base font-medium'
            color='default'
            size='lg'
            onPress={onClose}
          >
            Отмена
          </Button>
          <Button
            type='submit'
            className='w-full font-medium'
            color='primary'
            size='lg'
            variant='shadow'
          >
            Cоздать
          </Button>
        </div>
      </form>
    </>
  );
};
