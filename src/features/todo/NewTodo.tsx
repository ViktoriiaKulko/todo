import styles from './NewTodo.module.css'
import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { todoAdded } from './todoSlice'
import { nanoid } from 'nanoid'
import IconRemove from '../../icons/IconRemove'

const NewTodo = () => {
  const dispatch = useAppDispatch()
  const [newTodo, setNewTodo] = useState('')
  const onSubmitted = () => {
    dispatch(
      todoAdded({
        id: nanoid(),
        text: newTodo,
        date: new Date().toISOString(),
        completed: false
      })
    )
    setNewTodo('')
  }

  return (
    <form className={styles.newTodo}>
      <input
        className={styles.field}
        type='text'
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button className={styles.buttonAdd} type='button' onClick={onSubmitted}>
        <IconRemove />
      </button>
    </form>
  )
}

export default NewTodo
