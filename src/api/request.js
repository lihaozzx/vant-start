import axios from 'axios';
import { getToken } from '../utils/auth';
import { Toast } from 'vant';
import router from '../router';

const url = process.env.VUE_APP_BASE_API + process.env.VUE_APP_PREFIX;

const service = axios.create({
  baseURL: url,
  timeout: 25000,
  // 也可以在这里设置headers
  headers: {
    'token': getToken(),
    'Accept': "application/json",
  },
});
// 对请求数据做点什么
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 对响应数据做点什么
service.interceptors.response.use(
  response => {
    const res = response.data;//后端的返回类
    if (res.messageCode !== 'MSG_1001') {
      if (res.messageCode === 'MSG_2001') {
        Toast('登录状态已过期，请重新登陆');
        sessionStorage.setItem("referrer", window.location.href.split("/#/")[1]);

        router.push({ name: 'Login' });
      } else if (res.messageCode === 'MSG_5001') {
        Toast(res.message);
      }
      // console.log(response.config.url);
      return Promise.reject(res || 'Error');
    } else {
      return res;
    }
  },
  error => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
