/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default-member
import axiosInstance from '../../config/axiosConfig';

const register = axiosInstance.post('/auth/signup')
  .then((response) => response.data)
  .catch((error) => { throw error; });
export default register;
