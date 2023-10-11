import React from 'react'
import { App } from 'yj-design-tools'
import { useNavigate, useLocation } from 'react-router-dom'

function Auth({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const token = App.getToken()

    if (!token) {
      navigate('/login')
    }
  }, [location.pathname])

  return children
}

export default Auth
