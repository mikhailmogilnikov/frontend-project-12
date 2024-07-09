import { configureStore } from '@reduxjs/toolkit';
import { chatsApi } from 'widgets/chat/chats-bar';
import { messagesApi } from 'widgets/chat/messages-list';

export const store = configureStore({
  reducer: {
    [chatsApi.reducerPath]: chatsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(chatsApi.middleware)
    .concat(messagesApi.middleware),
});
