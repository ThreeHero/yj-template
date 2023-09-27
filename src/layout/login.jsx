import React, { useCallback } from 'react'
import { Login } from 'yj-design-components'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import YJUtils from 'yj-design-tools'
import { USERINFO } from '@/config/const.config'

const testLoginConfig = {
  username: 'admin',
  password: '123456'
}

const { setToken, setCache } = YJUtils.App

export default () => {
  const navigate = useNavigate()

  const login = useCallback(({ username, password }) => {
    if (username === testLoginConfig.username && password === testLoginConfig.password) {
      message.success('登录成功')
      setToken('demo')
      setCache(USERINFO, { username: 'admin', token: 'demo' })
      navigate('/')
    } else {
      message.error('登录失败')
    }
  }, [])

  return <Login onLogin={login} />
}
