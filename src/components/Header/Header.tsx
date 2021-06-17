import styles from './Header.module.css'
import IconMoon from '../../icons/IconMoon'
import IconSun from '../../icons/IconSun'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { change, selectCurrentTheme } from '../../features/theme/themeSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectCurrentTheme)
  const changeTheme = () => dispatch(change())

  return (
    <div className={styles.header}>
      <div className={styles.logo}>TODO</div>

      <button className={styles.button} onClick={changeTheme}>
        {currentTheme === 'light' ? <IconMoon /> : <IconSun />}
      </button>
    </div>
  )
}

export default Header
