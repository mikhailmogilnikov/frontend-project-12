import { useDispatch, useSelector } from 'react-redux';

export const useMessengerStore = () => {
  const dispatch = useDispatch();

  const activeChat = useSelector((state) => state.messenger.activeChat);

  const setActiveChat = (newActiveChat) => {
    dispatch({
      type: 'messenger/setActiveChat',
      payload: newActiveChat,
    });
  };

  return {
    activeChat,
    setActiveChat,
  };
};
