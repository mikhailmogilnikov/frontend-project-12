import axios from 'axios';
import { BASE_URL } from 'shared/config/urls';

export default axios.create({
  baseURL: BASE_URL,
});
