import axios from 'shared/api/axios';

export const loginApi = (values) => axios.post('/login', values);
