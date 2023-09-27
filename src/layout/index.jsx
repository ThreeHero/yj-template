import { Layout, Button } from 'yj-design-components'
import React, { useCallback } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { menuItem } from './menuConfig'
import { PRIMARY_COLOR } from '@/config/antd.style.config'
import config from '@/config/project.config'
import { logout } from '@/utils/tools'
import { message } from 'antd'

const { name: projectName } = config
function Index() {
  // 跳转页面
  const navigate = useNavigate()
  const jumpPage = useCallback(({ key }) => {
    navigate(key)
  }, [])

  return (
    <Layout
      triggerPosition="bottom"
      bgColor={PRIMARY_COLOR}
      slideMenu={{ items: menuItem, onClick: jumpPage }}
      logo={{
        complete: `${projectName}管理系统`,
        ellipsis: projectName
      }}
      headerRightContent={
        <Button
          type="text"
          confirm={{
            title: '确认退出?'
          }}
          onClick={() =>
            logout(() => {
              navigate('/login')
              message.success('退出成功')
            })
          }
        >
          退出
        </Button>
      }
    >
      <Outlet />
    </Layout>
  )
}

export default Index
