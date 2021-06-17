import styles from './Todo.module.css'
import { TimeAgo } from './TimeAgo'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectById, todoRemoved } from './todoSlice'
import IconRemove from '../../icons/IconRemove'

const Todo: FC<{ id: string | number }> = ({ id }) => {
  const dispatch = useAppDispatch()
  const todo = useAppSelector((state) => selectById(state, id))
  const onButtonRemoveClicked = () => dispatch(todoRemoved(id))

  return (
    <div className={styles.todo}>
      {todo && (
        <>
          <div className={styles.wrapper}>
            <div className={styles.text}>{todo.text}</div>
            <button
              className={styles.buttonRemove}
              type='button'
              onClick={onButtonRemoveClicked}
            >
              <IconRemove />
            </button>
          </div>
          <TimeAgo timestamp={todo.date} />
        </>
      )}
    </div>
  )
}

export default Todo
