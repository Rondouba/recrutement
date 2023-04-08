import axiosInstance from '../../config/axiosConfig';

const getCompanies = async (params) => axiosInstance('/companies', {
  method: 'GET',
  withCredentials: false,
  params,
});

export default getCompanies;
