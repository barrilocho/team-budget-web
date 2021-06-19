import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { logout } from 'actions';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export function setToken(token) {
  axiosInstance.defaults.headers.common.Authorization = token;
}

// const publicRoutes = [
//   'login',
//   'login-token',
//   'recuperar-token',
//   'error-404',
//   'registro',
//   'recuperar',
//   'terminos-y-condiciones',
//   'politicas-de-privacidad',
//   'restablecer',
//   'alt-login',
// ];

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (e) => {
//     const router = useRouter();
//     const dispatch = useDispatch();
//     const pathnameStart = router.pathname.split('/')[1];
//     const {
//       response: {
//         data: { error },
//         status,
//       },
//     } = e;

//     if ((status === 401 || error.statusCode === 401) && publicRoutes.indexOf(pathnameStart) < 0) {
//       dispatch(logout());
//     }
//     return Promise.reject(e);
//   }
// );
