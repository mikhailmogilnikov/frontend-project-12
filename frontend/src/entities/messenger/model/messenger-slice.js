/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { chatsApi } from 'entities/chat';
import { messagesApi } from 'entities/message';

const initialState = {
  messages: undefined,
  chats: undefined,
  activeChat: null,
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
    setActiveChat: (state, { payload }) => {
      state.activeChat = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      messagesApi.endpoints.getMessages.matchFulfilled,
      (state, action) => {
        state.messages = action.payload;
      },
    );
    builder.addMatcher(
      chatsApi.endpoints.getChats.matchFulfilled,
      (state, action) => {
        state.chats = action.payload;
        state.activeChat = action.payload[0];
      },
    );
  },
});

export const { reducer: messengerReducer } = messengerSlice;
