import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import todoReducer from '../features/todo/todoSlice'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer,
    counter: counterReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
