//对axios进行二次封装
import axios from 'axios';

//创建一个axios实例

const request = axios.create({
    //设置基础路径
    baseURL: '/api',
    //设置超时时间，则这个请求必须在5秒之内完成，如果超过5秒，则请求失败

    timeout: 5000

})
//设置请求拦截器
request.interceptors.request.use((config) => {

    //config是我们的请求拦截器的配置对象，如果不返回这个config 则可能连请求也无法发送
    //并且其中携带一个重要的属性，就是携带请求头的公共参数，比如token
    return config;
});

//配置响应拦截器
request.interceptors.response.use((response) => {
    //成功的回调,此处返回的是数据，并且可以简化返回的数据
    return response;
}, (error) => {

    //处理http网络错误
    return Promise.reject(new Error(error.message));
});

//务必对外暴露这个axios ,否则无法被使用
export default request


