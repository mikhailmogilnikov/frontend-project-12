/* eslint-disable */
import { MotionLayout } from 'shared/ui/motion-layout';
import { MessageBubble } from './bubble';

export const Message = ({ message }) => {
  const myUsername = localStorage.getItem('username');
  const isOwnMessage = message.username === myUsername;

  return (
    <MotionLayout
      key={message.id}
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: isOwnMessage ? 30 : -30 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ delay: index * 0.01 }}
      transition={{ type: 'spring', stiffness: 600, damping: 60 }}
    >
      <MessageBubble message={message} />
    </MotionLayout>
  );
};
