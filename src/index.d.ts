declare module 'yj-design-tools' {
  export const setCache: (key: string, value: any) => undefined
  export const setToken: (token: string) => undefined
  export const setUserinfo: (userInfo: object) => undefined

  export const getCache: (key: string) => any
  export const getToken: () => string
  export const getUserinfo: () => object

  export const clearCache: (key: string) => undefined
  export const clearToken: () => undefined
  export const clearUserinfo: () => undefined

  export const md5: (s: string) => string
  export const formatDate: (date: any, format?: string) => string
  // dayjs日期
  export const dateJs: any

  // 创建axios实例对象
  export const getInstance: (config: object, callback: (string) => {}, successCode: number) => any
  // axios实例对象 请求基地址 http://127.0.0.1:9000
  export const http: any
}
