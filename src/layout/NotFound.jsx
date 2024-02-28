import useTitle from '@/hooks/useTitle'
import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  useTitle('未找到页面')
  return (
    <Result
      status="404"
      title="404"
      subTitle="未找到页面"
      extra={
        <Button
          type="primary"
          onClick={() => navigate('/')}
        >
          回到首页
        </Button>
      }
    />
  )
}

export default NotFound
