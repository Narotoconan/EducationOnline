import axios from "axios"
import qs from 'qs'
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 1000 * 5
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"

// 添加请求拦截器
// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //window.localStorage.getItem("accessToken") 获取token的value
    let token = window.localStorage.getItem("access_token")
    if (token) {
        //将token放到请求头发送给服务器,将tokenkey放在请求头中
        config.headers.common['Authorization'] = token;
        //也可以这种写法
        // config.headers['accessToken'] = Token;
        return config;

    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}

function passwordPost(url, params,encryptKey) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url:url,
            data: JSON.stringify(params),
            headers:{
                "Encrypt-Key":encryptKey
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        });
    });
}

function avatarPost(url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url:url,
            data: params,
            headers:{
                "content-type":'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        });
    });
}

export default {
    get,
    post,
    passwordPost,
    avatarPost,
}
