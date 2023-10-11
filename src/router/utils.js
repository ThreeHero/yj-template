import { lazy } from 'react'

const replaceIndex = path => path.replaceAll('./', '').replace(/(\/index)?\.[jt]sx?/g, '')
const whiteRoute = ['api', 'components', 'map']

const getRoutes = () => {
  const pagesContext = require.context('../pages', true, /\.[jt]sx?$/)
  const pageModules = pagesContext
    .keys()
    .map(modulePath => {
      const pathWithoutExtension = replaceIndex(modulePath)

      if (whiteRoute.includes(pathWithoutExtension.split('/').at(1))) {
        return null
      }

      return pathWithoutExtension
    })
    .filter(Boolean)

  return pageModules
}

const routes = getRoutes()

const routesFile = routes.map(file => {
  const Component = lazy(() => import('pages/' + file))
  // 判断
  const path = '/' + file.replaceAll('/[', '[').replaceAll('[', '/:').replaceAll(']', '')

  return {
    path,
    element: <Component />
  }
})

export default routesFile
