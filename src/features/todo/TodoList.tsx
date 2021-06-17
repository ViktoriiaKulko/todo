import { useAppSelector } from '../../app/hooks'
import Todo from './Todo'
import styles from './TodoList.module.css'
import { selectIds } from './todoSlice'

const TodoList = () => {
  const todosIds = useAppSelector(selectIds)

  return (
    <div className={styles.list}>
      {todosIds.map((todoId) => (
        <Todo key={todoId} id={todoId} />
      ))}
    </div>
  )
}

export default TodoList
