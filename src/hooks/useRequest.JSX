import { useState, useEffect } from 'react'

export default function useRequest(requestFn, requestParams) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  async function request() {
    setLoading(true)
    try {
      const response = await requestFn(requestParams || {})
      if (response.code) {
        setError(response.message)
      } else {
        setData(response)
      }
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    request()
  }, [requestParams])

  return { loading, error, data }
}
