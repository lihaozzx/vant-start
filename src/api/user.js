import axios from './request';

/**
 * 登陆接口
 * @param {Object} data 账号密码
 */
export function login(data) {
  return new Promise((resolve, reject) => {
    axios.post('/main/login', data).then(res => {
      if (res.code === 200) {
        resolve(res);
      } else {
        this.err(res.msg);
        reject(res);
      }
    });
  });
}

export function logout(data) {
  return new Promise((resolve, reject) => {
    axios.post('/main/logout', data).then(res => {
      if (res.code === 200) {
        resolve(res);
      } else {
        this.err(res.msg);
        reject(res);
      }
    });
  });
}

export function getInfo(data) {
  return new Promise((resolve, reject) => {
    axios.get('/main/getInfo', { params: data }).then(res => {
      if (res.code === 200) {
        resolve(res);
      } else {
        this.err(res.msg);
        reject(res);
      }
    });
  });
}
