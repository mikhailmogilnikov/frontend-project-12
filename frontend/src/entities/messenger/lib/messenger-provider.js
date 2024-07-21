import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useMessengerStore } from './use-messenger-store';

export const MessengerProvider = ({ children }) => {
  const {
    addNewMessage, addNewChat, editChat, removeChat,
  } = useMessengerStore();

  useEffect(() => {
    const socket = io('');

    const handleNewMessage = (payload) => {
      addNewMessage(payload);
    };

    const handleNewChat = (payload) => {
      addNewChat(payload);
    };

    const handleEditChat = (payload) => {
      editChat(payload);
    };

    const handleDeleteChat = (payload) => {
      removeChat(payload);
    };

    socket.on('newMessage', handleNewMessage);
    socket.on('newChannel', handleNewChat);
    socket.on('renameChannel', handleEditChat);
    socket.on('removeChannel', handleDeleteChat);

    return () => {
      socket.off('newMessage', handleNewMessage);
      socket.off('newChannel', handleNewChat);
      socket.off('renameChannel', handleEditChat);
      socket.off('removeChannel', handleDeleteChat);

      socket.disconnect();
    };
  }, []);

  return children;
};
