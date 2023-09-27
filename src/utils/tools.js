import YJUtils from 'yj-design-tools'
import { USERINFO } from '@/config/const.config'

const { clearCache, clearToken } = YJUtils.App

export function logout(callback) {
  clearToken()
  clearCache(USERINFO)

  // 跳转页面 弹出提示 调用接口
  callback?.()
}
