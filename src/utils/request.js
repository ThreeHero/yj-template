import { getInstance } from 'yj-design-tools'
import config from '@/config/http.config'
import { message } from 'antd'

export const http = getInstance(config, message.error)

export default http
