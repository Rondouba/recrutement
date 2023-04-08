import axios from 'axios';
// import toast from 'react-hot-toast';
// import { getCookie } from 'react-use-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 1000,
  headers: {
    Authorization: `Bearer${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = getCookie('token');
//   if ((config.url === '/auth/signup' || config.url === '/auth/login')) {
//     return config;
//   }
//   if (!token) {
//     window.location.href = '/login';
//   }
//   config.headers.Authorization = token;

//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (!err.response) {
//       toast.error('Erreur de réseau!');
//       return;
//     }
//     if (err.response.status === 401) {
//       toast.error('Requete non autorisée!');
//       return;
//     }
//     if (err.response.status === 403) {
//       toast.error('Requete interdite!');
//       return;
//     }
//     if (err.response.data.error) {
//       toast.error(err.response.data.error);
//       return;
//     }
//     if (err.response.data.message) {
//       toast.error(err.response.data.message);
//     }
//   },
// );

export default axiosInstance;
