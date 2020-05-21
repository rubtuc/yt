import axios from 'axios';
import { Toast } from 'mint-ui';
const BASE_URL = {
  DEV: 'http://192.168.43.54:3000/api', // 测试路由
};

const service = axios.create({
  baseURL: BASE_URL.DEV,
  timeout: 5000,
});


const REQUEST_SUCCESS = 1;

// 跨域携带cookie
service.defaults.withCredentials = false;
service.interceptors.request.use(
  (config) => {
    const req = config;
    req.data = {
      args: config.data ? config.data : {},
      token: '',
      deviceinfo: '',
    };
    return req;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    const { data } = response;
    // if (data.retcode === REQUEST_SUCCESS) {
    // console.log(data)
      return data;
    // }
    // Toast({
    //   message: data.msg.prompt,
    // });
    // throw new Error(data.msg.error);
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log(`err${error}`); // for debug
    return Promise.reject(error);
  },
);
export default service;
