/* eslint-disable */
import axios from 'shared/api/axios';
import { getAuthHeader } from 'shared/lib/utils/get-auth-header';

export const addMessage = (message) =>
  axios.post('/messages', message, { headers: getAuthHeader() });
