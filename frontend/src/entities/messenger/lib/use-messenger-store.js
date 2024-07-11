import { useDispatch, useSelector } from 'react-redux';

export const useMessengerStore = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messenger.messages);
  const activeChat = useSelector((state) => state.messenger.activeChat);

  const addNewMessage = (newMessage) => {
    dispatch({
      type: 'messenger/addMessage',
      payload: newMessage,
    });
  };

  const setActiveChat = (newActiveChat) => {
    dispatch({
      type: 'messenger/setActiveChat',
      payload: newActiveChat,
    });
  };

  return {
    messages,
    activeChat,
    setActiveChat,
    addNewMessage,
  };
};
