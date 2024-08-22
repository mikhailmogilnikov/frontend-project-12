/* eslint-disable */
import { Button } from '@nextui-org/react';
import { AnimatePresence } from 'framer-motion';
import { PiCaretRightBold } from 'react-icons/pi';
import { MotionLayout } from 'shared/ui/motion-layout';

export const SendMessage = ({ message, isLoading }) => {
  return (
    <AnimatePresence>
      {message.length && (
        <MotionLayout
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <Button
            isDisabled={!message.length}
            type='submit'
            color='secondary'
            isIconOnly
            radius='full'
            className='w-8 h-8 min-w-8 -mr-2'
            isLoading={isLoading}
          >
            <PiCaretRightBold size={20} />
          </Button>
        </MotionLayout>
      )}
    </AnimatePresence>
  );
};
