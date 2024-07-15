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
  }),
});

export const { useGetChatsQuery, useAddChatMutation } = chatsApi;
