/* eslint-disable functional/no-conditional-statement */
import { createApi } from '@reduxjs/toolkit/query/react';
import { createAuthBaseQuery } from 'shared/lib/utils/create-auth-base-query';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: createAuthBaseQuery(),
  endpoints: (build) => ({
    getMessages: build.query({
      query: () => 'messages',
    }),
    addMessage: build.mutation({
      query: (body) => ({
        url: 'messages',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
