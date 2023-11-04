declare module 'yj-design-tools' {
  export class App {
    static getConfig(): () => any
    static setConfig(params: any): (params: any) => any
    static getToken(): () => any
    static setToken(params: any): (params: any) => any
    static clearToken(): () => any
    static setCache(key: any, value: any): (key: any, value: any) => any
    static getCache(key: any): (key: any) => any
    static clearCache(key: any): (key: any) => any
    static md5(str: any): (str: any) => any
    static dayjs(params: any): (params: any) => any
  }
  export const getHttp: (config: any) => {}
  export const formatDate: (date: any, format?: string) => {}
}
