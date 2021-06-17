import { parseISO, formatDistanceToNow } from 'date-fns'
import { FC } from 'react'
import styles from './TimeAgo.module.css'

export const TimeAgo: FC<{ timestamp: any }> = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <div className={styles.timeAgo} title={timestamp}>
      {timeAgo}
    </div>
  )
}
