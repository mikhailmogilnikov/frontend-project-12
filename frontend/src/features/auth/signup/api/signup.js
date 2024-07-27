import axios from 'shared/api/axios';

export const signupApi = (values) => axios.post('/signup', values);
