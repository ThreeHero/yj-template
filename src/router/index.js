// import React from 'react'
import { Navigate } from 'react-router-dom'
import Main from '@/layout'
// pages下布局内容路由文件
import routes from './utils'

import Login from '@/layout/login'
import Auth from '@/components/Auth'

export default [
  {
    path: '/',
    element: (
      <Auth>
        <Main />
      </Auth>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />
      },
      ...routes
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]
