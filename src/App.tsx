import './App.css'
import { useAppSelector } from './app/hooks'
import { selectCurrentTheme } from './features/theme/themeSlice'
import Header from './components/Header/Header'
import TodoList from './features/todo/TodoList'
import NewTodo from './features/todo/NewTodo'

function App() {
  const currentTheme = useAppSelector(selectCurrentTheme)

  return (
    <div className={`app theme-${currentTheme}`}>
      <div className='app-top'>
        <div className='app-wrapper'>
          <Header />
          <NewTodo />
        </div>
      </div>

      <div>
        <div className='app-wrapper'>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
