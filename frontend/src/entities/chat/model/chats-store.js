/* eslint-disable */
import { createApi } from '@reduxjs/toolkit/query/react';
import { createAuthBaseQuery } from 'shared/lib/utils/create-auth-base-query';

export const chatsApi = createApi({
  reducerPath: 'chatsApi',
  baseQuery: createAuthBaseQuery(),
  endpoints: (build) => ({
    getChats: build.query({
      query: () => 'channels',
    }),
    addChat: build.mutation({
      query: (body) => ({
        url: 'channels',
        method: 'POST',
        body,
      }),
    }),
    editChat: build.mutation({
      query: ({ id, body }) => ({
        url: `channels/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    removeChat: build.mutation({
      query: (id) => ({
        url: `channels/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetChatsQuery,
  useAddChatMutation,
  useEditChatMutation,
  useRemoveChatMutation,
} = chatsApi;
