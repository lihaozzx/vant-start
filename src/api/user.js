import axios from './request';

/**
 * 登陆接口
 * @param {Object} data 账号密码
 */
export function login(data) {
    return new Promise((resolve, reject) => {
        axios.post('/main/login', $qs.stringify(data)).then(res => {
            if (res.code === 200) {
                resolve(res);
            } else {
                this.err(res.msg);
                reject(res);
            }
        })
    })
}

export function getUserInfo(data) {
    return new Promise((resolve, reject) => {
        axios.get('/main/userinfo', { params: data }).then(res => {
            if (res.code === 200) {
                resolve(res);
            } else {
                this.err(res.msg);
                reject(res);
            }
        })
    })
}