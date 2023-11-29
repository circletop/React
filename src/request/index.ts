import axios from "axios";
const baseURL= import.meta.env.VITE_API_URL
const timeout= import.meta.env.VITE_TIMEOUT
const instance =axios.create({
  baseURL,
  timeout,
})
// 请求拦截
instance.interceptors.request.use((config)=> {
  return config
}, error=> {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(res=> {
  return res.data
}, error=> {
  return Promise.reject(error)
})

export default instance