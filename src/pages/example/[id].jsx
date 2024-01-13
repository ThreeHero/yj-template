import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Table } from 'yj-design-components'

const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '姓名',
    dataIndex: 'name'
  }
]

const searchItems = [
  {
    label: '姓名',
    name: 'name'
  },
  {
    label: '性别',
    name: 'gender',
    options: [
      {
        label: '男',
        value: 1
      },
      {
        label: '女',
        value: 2
      }
    ]
  }
]

function Index() {
  const params = useParams()

  const request = params => {
    console.log(params)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: [
            {
              id: 1,
              name: '这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏这里测试超出隐藏'
            },
            { id: 2, name: 'b' },
            { id: 3, name: 'c' }
          ]
        })
      }, 100)
    })
  }

  useEffect(() => {
    console.log(params)
  }, [params])

  return (
    <Table
      seral
      search={{
        extra: <Button.Download>下载</Button.Download>,
        extraIndex: 'before',
        form: {
          items: searchItems
        }
      }}
      request={request}
      columns={columns}
    />
  )
}

export default Index
