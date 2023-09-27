// todo 引入pages
import routerConfig from '@/config/router.config'
import { lazy } from 'react'

const replaceIndex = path => path.replace(/(\/index)?\.[jt]sx?/g, '')

const routes = routerConfig.map(item => replaceIndex(item))

const routesFile = routes.map(file => {
  const Component = lazy(() => import('pages/' + file))
  // lazy(() => `import(${file})`)
  // 判断
  const path = '/' + file.replaceAll('/[', '[').replaceAll('[', '/:').replaceAll(']', '')

  return {
    path,
    element: <Component />
  }
})

export default routesFile
