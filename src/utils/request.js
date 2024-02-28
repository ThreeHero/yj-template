import { getHttp } from 'yj-design-tools'
import config from '@/config/http.config'

export const http = getHttp(config)

/**
 * 不需要验证
 */
export const headers = {
  No_auth: 'YES'
}

export default http
