import axios from "axios"
import qs from 'qs'

axios.defaults.baseURL = 'api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVirNTFGyMtRRKi5NUrJSCgjydHZVAvKS8wtSi5WsopVCg12DgAKOLr6efkqxOkqpFQVA9WaGJuZmBuaGFjpKmYklYAFjC0szoEAtAAAA__8.oROBJfEmm9KbeRYRB0RVlB2jaWzGUpSRkagYXJ2PdC8';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export function get(url, params) {
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

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
const toAvatar = axios.create({
    headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
})

toAvatar.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        config.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVirNTFGyMtRRKi5NUrJSCgjydHZVAvKS8wtSi5WsopVCg12DgAKOLr6efkqxOkqpFQVA9WaGJuZmBuaGFjpKmYklYAFjC0szoEAtAAAA__8.oROBJfEmm9KbeRYRB0RVlB2jaWzGUpSRkagYXJ2PdC8';
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

export function avatarPost(url, params) {
    return new Promise((resolve, reject) => {
        toAvatar.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
