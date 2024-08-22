/* eslint-disable */
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from 'shared/config/urls';

export const createAuthBaseQuery = () => fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
