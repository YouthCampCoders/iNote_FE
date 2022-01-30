"use strict";
exports.__esModule = true;
exports.loginRequest = void 0;
var axios_1 = require("axios");
var url = "https://qc6gzw.app.cloudendpoint.cn/";
var token = "";
// 登录部分请求
function loginRequest(config) {
    var instance = axios_1["default"].create({
        baseURL: url
    });
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        token = response.data.token;
        localStorage.setItem('token', token);
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    return instance(config);
}
exports.loginRequest = loginRequest;
