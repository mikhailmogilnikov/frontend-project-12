/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { messagesApi } from 'entities/message';

const initialState = {
  messages: undefined,
  activeChat: null,
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
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
  },
});

export const { reducer: messengerReducer } = messengerSlice;
