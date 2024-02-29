import React from 'react'
import { getToken } from 'yj-design-tools'
import { useNavigate, useLocation } from 'react-router-dom'

function Auth({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const token = getToken()

    if (!token) {
      navigate('/login')
    }
  }, [location.pathname])

  return children
}

export default Auth
