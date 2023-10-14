import { useRoutes } from 'react-router-dom'
import routes from './router'
import { App } from 'yj-design-components'
import config from '@/config/antd.style.config'

export default () => {
  return (
    <App
      token={config.token}
      style={{ height: '100%' }}
    >
      {useRoutes(routes)}
    </App>
  )
}
