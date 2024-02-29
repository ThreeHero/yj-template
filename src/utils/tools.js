import { clearUserinfo, clearToken } from 'yj-design-tools'

import config from '@/config/http.config'

const { baseURL } = config

export function logout(callback) {
  clearToken()
  clearUserinfo()

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
