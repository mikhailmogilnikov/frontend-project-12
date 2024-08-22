/* eslint-disable */
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
    editChat: (state, { payload }) => {
      const editChatIndex = state.chats.findIndex(
        ({ id }) => payload.id === id,
      );
      state.chats[editChatIndex].name = payload.name;
    },
    removeChat: (state, { payload }) => {
      const newChatsList = state.chats.filter(({ id }) => id !== payload.id);
      const newMessagesList = state.messages.filter(
        ({ channelId }) => payload.id !== channelId,
      );

      state.activeChat = state.chats[0];
      state.chats = newChatsList;
      state.messages = newMessagesList;
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
