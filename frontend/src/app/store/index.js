import { configureStore } from '@reduxjs/toolkit';
import { chatsApi } from 'entities/chat';
import { messagesApi } from 'entities/message';
import { messengerReducer } from 'entities/messenger';

export const store = configureStore({
  reducer: {
    messenger: messengerReducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(chatsApi.middleware)
    .concat(messagesApi.middleware),
});
