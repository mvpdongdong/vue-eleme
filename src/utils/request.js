import axios from 'axios';
import qs from 'querystring';

// 创建axios实例
const service = axios.create({
  timeout: 15000, // 请求超时时间
  withCredentials: false,
});

// request拦截器
service.interceptors.request.use(
  config => config,
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code && res.code !== 200) {
      return Promise.reject(new Error());
    }
    return res;
  },
  (error) => {
    console.log(`err${error}`); // for debug
    return Promise.reject(error);
  },
);

export default service;

export function axiosPost(opts) {
  const data = opts.data ? qs.stringify(opts.data) : {};
  return service({
    url: opts.url,
    method: 'post',
    data,
  });
}

export function axiosGet(opts) {
  const params = opts.params || {};
  return service({
    url: opts.url,
    method: 'get',
    params,
  });
}
