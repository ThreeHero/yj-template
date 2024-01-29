import { App } from 'yj-design-tools'
import { USERINFO } from '@/config/const.config'

import config from '@/config/http.config'

const { baseURL } = config
const { clearCache, clearToken } = App

export function logout(callback) {
  clearToken()
  clearCache(USERINFO)

  // 跳转页面 弹出提示 调用接口
  callback?.()
  window.location.reload()
}

export function addPath(path) {
  if (path === undefined || path === null) {
    return null
  }
  return baseURL + path
}
