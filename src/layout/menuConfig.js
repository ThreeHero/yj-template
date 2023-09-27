import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'

// 路由导航的key以/开头 其余没有/
export const menuItem = [
  {
    label: '首页',
    key: '/home',
    icon: <HomeOutlined />
  },
  {
    label: '示例',
    key: 'example',
    icon: <InfoCircleOutlined />,
    children: [
      {
        label: '示例1',
        key: '/example/1'
      },
      {
        label: '示例2',
        key: '/example/2'
      }
    ]
  }
]
