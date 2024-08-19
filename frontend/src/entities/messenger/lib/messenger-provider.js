/* eslint-disable functional/no-try-statement */
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useMessengerStore } from './use-messenger-store';

export const MessengerProvider = ({ children }) => {
  const {
    addNewMessage, addNewChat, editChat, removeChat,
  } = useMessengerStore();
  const { t } = useTranslation();

  useEffect(() => {
    const socket = io('');

    const socketEvent = (type) => (payload) => {
      const events = {
        newMessage: () => addNewMessage(payload),
        newChat: () => addNewChat(payload),
        editChat: () => editChat(payload),
        removeChat: () => removeChat(payload),
      };

      return events[type]();
    };

    socket.on('newMessage', socketEvent('newMessage'));
    socket.on('newChannel', socketEvent('newChat'));
    socket.on('renameChannel', socketEvent('editChat'));
    socket.on('removeChannel', socketEvent('removeChat'));

    socket.on('connect_error', () => {
      toast.error(t('project.networkError'));
    });

    return () => {
      socket.removeAllListeners();
      socket.disconnect();
    };
  }, []);

  return children;
};
