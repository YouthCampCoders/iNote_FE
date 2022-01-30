import axios from 'axios'
let url = "https://qc6gzw.app.cloudendpoint.cn/"
let token = ""
// 登录部分请求
export function loginRequest(config:any) {
  const instance = axios.create({
    baseURL: url,
  })
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    token = response.data.token;
    localStorage.setItem('token',token);
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  return instance(config);
}
