import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return <div style={{ height: '100%' }}>{useRoutes(routes)}</div>
}

export default App
