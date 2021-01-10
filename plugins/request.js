/**
 * 基于axios 封装的请求模块
*/
import axios from 'axios'

//创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io/',
})

//通过插件机制获取上下文对象（）
//插件导出函数必须作为default成员
export default ({ store }) => {
    //请求拦截器
    // Add a request interceptor
    //任何请求都要经过请求拦截器
    //我们可以在请求拦截器中做一些公共的业务处理，列入统一设置tocken
    request.interceptors.request.use(function (config) {
        // Do something before request is sent
        //求求就会经过这里
        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${store.state.user.token}`

        }
        //返回config求情配置对象
        return config;
    }, function (error) {
        //如果请求失败（此时请求还没有发出去）就会进入这里
        // Do something with request error
        return Promise.reject(error);
    });
}


/*

//相应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
*/


