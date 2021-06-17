import { Children } from 'react'
import styles from './Icon.module.css'

const Icon = ({ children }: any) => {
  return <div className={styles.icon}>{children}</div>
}

export default Icon
