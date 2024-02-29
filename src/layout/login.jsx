import React, { useCallback } from 'react'
import { Login } from 'yj-design-components'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { setToken, setUserinfo } from 'yj-design-tools'
import useTitle from '@/hooks/useTitle'

const testLoginConfig = {
  username: 'admin',
  password: '123456'
}

export default () => {
  const navigate = useNavigate()

  useTitle('登录')

  const login = useCallback(async ({ username, password }) => {
    if (username === testLoginConfig.username && password === testLoginConfig.password) {
      message.success('登录成功')
      setToken('demo')
      setUserinfo({ username: 'admin', token: 'demo' })
      navigate('/')
      window.location.reload()
    } else {
      message.error('登录失败')
    }
  }, [])

  return <Login onLogin={login} />
}
