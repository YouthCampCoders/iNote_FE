import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig, RequestInterceptors } from './types'
import { message } from 'antd'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  loader: any

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.loader = message

    // 保存基本信息
    this.interceptors = config.interceptors

    // request 和 response 的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例的公共拦截
    this.instance.interceptors.request.use(
      (config) => {
        this.loader.loading('加载中', 0)
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loader.destroy()
        return res.data
      },
      (err) => {
        this.loader.destroy()
        if (err.response.status === 404) {
          console.log('404')
        }
        return err
      }
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default Request
