/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChat: null,
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    setActiveChat: (state, { payload }) => {
      state.activeChat = payload;
    },
  },
});

export const { reducer: messengerReducer } = messengerSlice;
