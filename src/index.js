import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import antdStyleConfig from '@/config/antd.style.config'

import App from './App'

import '@/assets/style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense>
    <ConfigProvider
      autoInsertSpaceInButton={false}
      locale={zhCN}
      theme={antdStyleConfig}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Suspense>
)
