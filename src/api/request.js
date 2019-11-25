import axios from 'axios';
// import router from '../router';
import store from '../store';
// import setting from '../utils/config';
const url = process.env.VUE_APP_BASE_API;

const service = axios.create({
  baseURL: url,
  timeout: 5000
});
// 对请求数据做点什么
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // config.headers['X-Token'] = getToken()
    }
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
    const res = response.data;

    if (res.stutas === 200) {
      return res.data;
    }
  },
  error => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
