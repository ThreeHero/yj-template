import React from 'react'
import YJUtils from 'yj-design-tools'
import { useNavigate, useLocation } from 'react-router-dom'

function Auth({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const token = YJUtils.App.getToken()

    if (!token) {
      navigate('/login')
    }
  }, [location.pathname])

  return children
}

export default Auth
