import environment from '@/configs/environment';
import axios from 'axios';
import qs from 'qs';

const http = axios.create({
  baseURL: environment.apiUrl,
  timeout: 30000,
  paramsSerializer: (params) => qs.stringify(params, {encode: false}),
});

http.interceptors.request.use(
  (config) => {
    const newConfig = {...config};
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
