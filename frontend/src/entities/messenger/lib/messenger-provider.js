import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useMessengerStore } from './use-messenger-store';

export const MessengerProvider = ({ children }) => {
  const { addNewMessage, addNewChat } = useMessengerStore();

  useEffect(() => {
    const socket = io('');

    const handleNewMessage = (payload) => {
      addNewMessage(payload);
    };

    const handleNewChat = (payload) => {
      addNewChat(payload);
    };

    socket.on('newMessage', handleNewMessage);
    socket.on('newChannel', handleNewChat);

    return () => {
      socket.off('newMessage', handleNewMessage);
      socket.off('newChannel', handleNewChat);

      socket.disconnect();
    };
  }, []);

  return children;
};
