// eslint-disable-next-line import/no-named-as-default
import axiosInstance from '../../config/axiosConfig';

const login = async (payload) => axiosInstance.post('/auth/login', payload)
  .then((response) => response)
  .catch((error) => { throw error; });

export default login;
