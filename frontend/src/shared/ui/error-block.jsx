/* eslint-disable */
import { MotionLayout } from './motion-layout';
import { Typo } from './primitives/typography';

export const ErrorBlock = ({ children }) => {
  return (
    <MotionLayout
      initial={{ opacity: 0, filter: 'blur(24px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(24px)' }}
      className='px-4 py-3 bg-danger/20 rounded-large'
    >
      <Typo className='text-danger'>{children}</Typo>
    </MotionLayout>
  );
};
