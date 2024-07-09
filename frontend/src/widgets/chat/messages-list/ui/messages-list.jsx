import { MessageBubble } from 'entities/message';
import { LayoutGroup } from 'framer-motion';
import { useMessengerStore } from 'shared/lib/hooks/use-messenger-store';
import { MotionLayout } from 'shared/ui/motion-layout';

export const MessagesList = ({ messages }) => {
  const { activeChat } = useMessengerStore();

  if (!messages.length) {
    return <>f</>;
  }

  const chatMessages = messages.filter(
    (message) => message.channelId === activeChat.id,
  );

  return (
    <LayoutGroup>
      {chatMessages.reverse().map((message) => (
        <MotionLayout
          key={message.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <MessageBubble message={message} />
        </MotionLayout>
      ))}
    </LayoutGroup>
  );
};
