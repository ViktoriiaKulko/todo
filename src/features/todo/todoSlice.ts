import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type Todo = {
  id: string
  text: string | undefined
  date: any
  completed: boolean
}

const todosAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const todoSlice = createSlice({
  name: 'todo',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoRemoved: todosAdapter.removeOne
  }
})

export const { todoAdded, todoRemoved } = todoSlice.actions

export default todoSlice.reducer

export const { selectIds, selectById } = todosAdapter.getSelectors<RootState>(
  (state) => state.todo
)
