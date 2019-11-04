import axios from 'axios';
import router from '../router';
import $qs from 'qs';
import store from '../store'
const turl = process.env.NODE_ENV === 'development' ? '/test' : 'your api url';

const service = axios.create({
    baseURL: turl,
    timeout: 5000
});
// 对请求数据做点什么
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 对响应数据做点什么
service.interceptors.response.use(
    response => {
        const res = response.data

    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service