import './App.css'
import { useAppSelector } from './app/hooks'
import { selectCurrentTheme } from './features/theme/themeSlice'
import Header from './components/Header/Header'

function App() {
  const currentTheme = useAppSelector(selectCurrentTheme)

  return (
    <div className={`app theme-${currentTheme}`}>
      <div className='app-top'>
        <div className='app-wrapper'>
          <Header></Header>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default App
