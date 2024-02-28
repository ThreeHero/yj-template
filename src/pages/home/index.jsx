import { Calendar, Card } from 'antd'
import React, { useState } from 'react'
import styles from './styles.module.less'
import dayjs from 'dayjs'

function Index() {
  const [time, setTime] = useState(dayjs().format('YYYY年MM月DD日 HH:mm:ss'))

  useState(() => {
    const t = setInterval(() => {
      setTime(dayjs().format('YYYY年MM月DD日 HH:mm:ss'))
    })
    return () => {
      if (t) {
        clearInterval(t)
      }
    }
  }, [])
  return (
    <div className={styles.home}>
      <Card
        className={styles.time}
        hoverable
      >
        {time}
      </Card>
      <Card>
        <Calendar fullscreen={false} />
      </Card>
    </div>
  )
}

export default Index
