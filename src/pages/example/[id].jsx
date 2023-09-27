import React from 'react'
import { useParams } from 'react-router-dom'

function Index() {
  const params = useParams()

  return <div>示例{params.id}</div>
}

export default Index
