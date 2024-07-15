import { useDispatch, useSelector } from 'react-redux';

export const useMessengerStore = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messenger.messages);
  const chats = useSelector((state) => state.messenger.chats);
  const activeChat = useSelector((state) => state.messenger.activeChat);

  const addNewMessage = (newMessage) => {
    dispatch({
      type: 'messenger/addMessage',
      payload: newMessage,
    });
  };

  const addNewChat = (newChat) => {
    dispatch({
      type: 'messenger/addChat',
      payload: newChat,
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
    chats,
    activeChat,
    setActiveChat,
    addNewMessage,
    addNewChat,
  };
};
