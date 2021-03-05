import axios from "axios"
import qs from 'qs'
import { Message } from 'element-ui';

axios.defaults.baseURL='api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000
//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVirNTFGyMtRRKi5NUrJSCgjydHZVAvKS8wtSi5WsopVCg12DgAKOLr6efkqxOkqpFQVA9WaGpuaWphZmBjpKmYklYAETS2NDoEAtAAAA__8.P-CQSE1UwsEtDLhKZ61dATOU4qdeD2K26SRWhRcQhss';

/*axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = '';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});*/


// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // 响应做些什么
    return response.data;

}, (err) => {
    // 状态码
    switch (err.response.status) {
        case 404:
            Message.error({message:'404 无法找到请求地址!'})
            break;
        case 400:
            Message({ type: 'error', message: '400 发出的请求有错误' })
            break;
        case 401:
            Message({ type: 'error', message: '用户没有权限（401 令牌、用户名、密码错误）。' })
            break;
        case 403:
            Message.error({message:'403 用户得到授权，但是访问是被禁止的!'})
            break;
        case 504:
            Message.error({message:'504 网关超时'})
            break;
        case 505:
        case 500:
            Message({ type: 'error', message: '500 服务器发生错误，请检查服务器'});
            break;
        default:
            Message.error({ message: '未知错误!'});
    }
})

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(params))
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
const toAvatar = axios.create({
    headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
})

/*toAvatar.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        config.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNqqVirNTFGyMtRRKi5NUrJSCgjydHZVAvKS8wtSi5WsopVCg12DgAKOLr6efkqxOkqpFQVA9WaGJuZmBuaGFjpKmYklYAFjC0szoEAtAAAA__8.oROBJfEmm9KbeRYRB0RVlB2jaWzGUpSRkagYXJ2PdC8';
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });*/

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
